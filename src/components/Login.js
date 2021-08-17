import { Button, Container, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import "../css/login.css"
import axios from "axios"
import cookie from "js-cookie"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux'
import { setUserLoginStatus } from '../redux/loginTypes'

const Login = () => {
    useEffect(() => {
        setValue({})
    }, [])
    const dispatch = useDispatch()
    const loginStatus = useSelector(state => state.login.loginStatus)
    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
    const [loginName, setLoginName] = useState("")
    const [loginPass, setLoginPass] = useState("")
    const [signupName, setsignupName] = useState("")
    const [signupPass, setsignupPass] = useState("")
    const [signupEmail, setsignupEmail] = useState("")
    const [value, setValue] = useState({})
    const showLogin = () => {
        setLogin(!login)
        setSignup(false)
    }
    const showSignup = () => {
        setSignup(!signup)
        setLogin(false)
    }

    const hitLogin = async () => {
        console.log(loginName, loginPass);
        const body = {
            "email": loginName,
            "password": loginPass
        }
        try {
            const res = await axios.post("http://localhost:5000/api/user/login", body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (res.data.status !== 400) {
                console.log(res);
                cookie.set("jwt", res.data.token)
                cookie.set("name", res.data.info.name)
                cookie.set("email", res.data.info.email)
                localStorage.setItem("token", res.data.token)
                setValue({})
                alert(res.data.message)
                dispatch(setUserLoginStatus(true))
                localStorage.setItem("login", res.data.login)
            }
            else {
                alert(res.data.message)
            }

        }
        catch (err) {
            console.log(err);
        }


    }


    const hitSignup = async () => {
        const body = {
            "name": signupName,
            "email": signupEmail,
            "password": signupPass,
        }

        const res = await axios.post("http://localhost:5000/api/user/register", body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        if (res.data.status !== 400) {
            console.log(res);
            cookie.set("jwt", res.data.token)
            cookie.set("name", res.data.info.name)
            cookie.set("email", res.data.info.email)
            localStorage.setItem("token", res.data.token)
            setValue({})
            alert(res.data.message)
            dispatch(setUserLoginStatus(true))
            localStorage.setItem("login", res.data.login)
        }
        else {
            alert(res.data.message)
        }
    }




    const responseGoogle = async (response) => {
        const body = {
            tokenId: response.tokenId
        }
        console.log(response);
        const res = await axios.post("http://localhost:5000/api/user/googlelogin", body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        console.log(res);
        cookie.set("jwt", res.data.token)
        cookie.set("name", res.data.info.name)
        cookie.set("email", res.data.info.email)
        localStorage.setItem("token", res.data.token)
        setValue({})
        alert(res.data.message)
        // dispatch(setUserLoginStatus(true))
        localStorage.setItem("login", res.data.login)

    }


    const responseFacebook = async (response) => {
        const body = {
            accessToken: response.accessToken,
            userID: response.userID
        }
        console.log(response);
        const res = await axios.post("http://localhost:5000/api/user/facebooklogin", body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        console.log(res);
        cookie.set("jwt", res.data.token)
        cookie.set("name", res.data.info.name)
        cookie.set("email", res.data.info.email)
        localStorage.setItem("token", res.data.token)
        setValue({})
        alert(res.data.message)
        dispatch(setUserLoginStatus(true))
        localStorage.setItem("login", res.data.login)
    }

    return (
        <div>
            {
                cookie.get("jwt") && cookie.get("name") && cookie.get("email") ?

                    <h1 style={{ textAlign: "center" }}>Welcome {cookie.get("name")}</h1>

                    :
                    <>
                        <div className="login">
                            <Button onClick={() => showLogin()}>Login</Button>
                            {
                                login === true ?
                                    <Container>
                                        <Form>
                                            <h1 style={{ textAlign: "center" }}>Login Here</h1>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control onChange={(e) => setLoginName(e.target.value)} type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={(e) => setLoginPass(e.target.value)} type="password" placeholder="Password" />
                                            </Form.Group>
                                        </Form>
                                        <Button variant="primary" type="submit" onClick={() => hitLogin()}>
                                            Submit
                                        </Button>
                                    </Container>
                                    :
                                    <>
                                    </>
                            }
                            <Button onClick={() => showSignup()}>Sign Up</Button>
                            {
                                signup === true ?
                                    <Container>
                                        <Form>
                                            <h1 style={{ textAlign: "center" }}>Signup Here</h1>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control onChange={(e) => setsignupName(e.target.value)} type="text" placeholder="Enter name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control onChange={(e) => setsignupEmail(e.target.value)} type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={(e) => setsignupPass(e.target.value)} type="password" placeholder="Password" />
                                            </Form.Group>
                                        </Form>
                                        <Button variant="primary" type="submit" onClick={() => hitSignup()}>
                                            Submit
                                        </Button>
                                    </Container>
                                    :
                                    <>
                                    </>
                            }
                            <h1>OR</h1>
                            <p>Login using </p>
                            <GoogleLogin style={{ textAlign: "center" }}
                                clientId="909681480373-6v1aj3pb3opujc1qfiihn4aifc168v40.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            <br></br>
                            <h1>OR</h1>
                            <p>Login using </p>
                            <FacebookLogin
                                appId="715672116057777"
                                autoLoad={false}
                                callback={responseFacebook}
                            />
                        </div>
                    </>
            }
        </div>
    )
}

export default Login
