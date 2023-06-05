import Link from "next/link";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row } from "react-bootstrap";
import { loginUser } from "./SignUp";
import { AxiosError } from "axios";
import { useState } from "react";
import { useRouter } from "next/router";


const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [submitError, setSubmitError] = useState("")
    const router = useRouter()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setLoading(true)

            const loginRes = await loginUser({ email, password })

            if (loginRes && !loginRes.ok) {
                setSubmitError(loginRes.error || "")
            }
            else {
                router.push("/")
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error.response?.data?.error
                setSubmitError(errorMsg)
            }
        }

        setLoading(false)
    }


    return ( 
        <div>
            <Container className="mt-5 rounded bg-emerald-400 w-50">
                <Row >
                <Form className=" justify-content-center" onSubmit={handleLogin}>
                <h1 className="mt-3 mb-3 text-center h3 font-weight-normal">Please Log in</h1>
                    <FormGroup className=" ms-5">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="useremail@domain.com" className="mb-4 w-75 mr-sm-2" onChange={handleEmailChange} />
                    </FormGroup>
                    <FormGroup className=" ms-5">
                        <FormLabel>Password </FormLabel>
                        <FormControl type="password" className=" w-75 mr-sm-2" onChange={handlePasswordChange}/>
                    </FormGroup>
                    <Link href="/" className="mb-3 ms-5">Forgot Password?</Link><br />
                    <Button className="mt-5 mb-3 bg-green-400 ms-5 btn-lg btn-block " variant="primary" type="submit" disabled={loading}>Sign In</Button>
                    {submitError && <FormText>{submitError}</FormText>}
                </Form>
                </Row>
            
            </Container>
        </div>
     );
}
 
export default Login;