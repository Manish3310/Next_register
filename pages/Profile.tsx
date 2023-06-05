import user from "@/models/user";
import { signOut, useSession } from "next-auth/react";
import { Button, Container } from "react-bootstrap";

export interface ButtonProps {
    title: string;
    // type: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Buttons = ({ title, disabled, onClick }: ButtonProps) => {
    return (
        <Container
            // type={type}
            // // disabled={disabled}
            onClick={onClick}
            className="w-20 bg-green-400"
        >
            {disabled ? 'Processing...' : title}
        </Container>
    )
    
}



const Profile = () => {
    const {data:session}:any=useSession()
    return ( 
        <Container className="mt-10 ">
            <>
            <div className="text-center ">{`Hello, ${session?.user?.fullName}`}</div>
            <div className="text-center ">{`Email: ${session?.user?.email}`}</div>
            <Buttons  title="Logout" onClick={signOut} />
            </>
        </Container>
     );
}
 
export default Profile;