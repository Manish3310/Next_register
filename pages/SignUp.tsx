import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row } from "react-bootstrap";




export interface InputErros {
    [key: string]: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
}

export const loginUser = async ({email, password} : LoginUserParams) => {
    const res = await signIn("credentials", {
        redirect: false,
        email,
        password
    })

    return res
}

export const getErrorMsg = (key: string, errors: InputErros[]) => {
    if(errors.find(err => err.hasOwnProperty(key) !== undefined)) {
        const errorObj = errors.find(err => err.hasOwnProperty(key))
        return errorObj && errorObj[key]
    }
}

const SignUp = () => {


    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [validationErrors, setValidationErrors] = useState<InputErros[]>([])
    const [submitError, setSubmitError] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const validateData = (): boolean => {
        const err = []

        if (data.fullName?.length < 4) {
            err.push({ fullName: "Full name must be atleast 4 characters long" })
        }
        else if (data.fullName?.length > 30) {
            err.push({ fullName: "Full name should be less than 30 characters" })
        }
        else if (data.password?.length < 6) {
            err.push({ password: "Password should be atleast 6 characters long" })
        }
        else if (data.password !== data.confirmPassword) {
            err.push({ confirmPassword: "Passwords don't match" })
        }

        setValidationErrors(err)

        if (err.length > 0) {
            return false
        }
        else {
            return true
        }
    }

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValid = validateData()

        if (isValid) {
            // sign up

            try {
                setLoading(true)
                const apiRes = await axios.post("http://localhost:3000/api/auth/signup", data)

                if (apiRes?.data?.success) {
                    // save data in session using next auth

                    const loginRes = await loginUser({
                        email: data.email,
                        password: data.password
                    })

                    if (loginRes && (!loginRes.ok)) {
                        setSubmitError(loginRes.error || "")
                    }
                    else {
                        router.push("/")
                    }
                }
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    const errorMsg = error.response?.data?.error
                    setSubmitError(errorMsg)
                }
            }

            setLoading(false)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // We get property name from event.target.name and set the value from onChange in it
        // So name in our input component should be same as the property in data state

        setData({ ...data, [event.target.name]: event.target.value })

    }

    return ( 
        <Container className="mt-4 rounded bg-emerald-400 w-50 ">
            <Row>
            <Form className="" onSubmit={handleSignup}>
            <h1 className="mt-3 mb-3 text-center h3 font-weight-normal">Please Sign Up</h1>
                    <FormGroup className=" ms-5">
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text"  className="mb-4 w-75 mr-sm-2" value={data.fullName} required onChange={handleInputChange} name="fullName" 
                        
                         />
                    </FormGroup>
                    <FormGroup className=" ms-5">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="useremail@domain.com" className="mb-4 w-75 mr-sm-2" value={data.email} required onChange={handleInputChange} name="email"  />
                    </FormGroup>
                    <FormGroup className=" ms-5">
                        <FormLabel>Password </FormLabel>
                        <FormControl type="password" className=" w-75 mr-sm-2" value={data.password} required onChange={handleInputChange} name="password"  />
                    </FormGroup>
                    <FormGroup className=" ms-5">
                        <FormLabel>Confirm Password </FormLabel>
                        <FormControl type="password" className=" w-75 mr-sm-2" value={data.confirmPassword} required onChange={handleInputChange} name="confirmPassword"  />
                    </FormGroup><br />
                    <Link href="/" className="mb-3 ms-5 ">Forgot Password?</Link><br />
                    <Button className="mt-3 mb-3 bg-green-400 btn-lg btn-block ms-5" variant="primary" type="submit" >Submit</Button>
                    {submitError && <FormText>{submitError}</FormText>} <br />
                    <FormText className="text-xs font-extrabold ms-5">Already have an account? <Link href={"/Login"} className="text-black">Login</Link></FormText>
                
                
            </Form>
            </Row>
        </Container>
     );
}
 
export default SignUp;



