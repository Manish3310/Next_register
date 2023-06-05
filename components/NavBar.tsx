import Link from "next/link";
import { Button, Container, Form, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import { useSession } from "next-auth/react";

const NavBar = () => {

    const {data:session}=useSession();
    return ( 
        <Navbar className="h-20 bg-emerald-600" >
            <Container>
                <NavbarBrand href="/" className="text-4xl font-bold">GPT 2.0</NavbarBrand>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Nav>
                    <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="secondary" className=" bg-green-400 ">Search</Button>
                    </Form>
                </Nav>
                <Navbar.Collapse id="main-navbar"></Navbar.Collapse>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    {session ? <NavLink as={Link} href="/Profile">User</NavLink>:<NavLink as ={Link} href="/SignUp">Register</NavLink>}
                    
                </Nav>
            </Container>

        </Navbar>
     );
}
 
export default NavBar;