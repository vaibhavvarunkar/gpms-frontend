import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from "axios"
import cookie from "js-cookie"
import "../css/profile.css"

const Profile = () => {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const changeProfile = async (event) => {
        event.preventDefault()
        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters long...")
        }
        else {
            if (newPassword === confirmPassword) {
                let token = localStorage.getItem("token")
                const body = {
                    "email": cookie.get("email"),
                    "currentPassword": currentPassword,
                    "newPassword": newPassword
                }
                try {
                    const res = await axios.post("http://localhost:5000/api/user/changeprofile", body, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            "auth-token": token
                        }
                    })
                    console.log(res);
                    alert(res.data.message)
                }
                catch (err) {
                    console.log(err);
                }

            }
            else {
                alert("new password and confirm password doesn't match")
            }
        }

    }
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={cookie.get("name")} type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={cookie.get("email")} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <h1>Change Password</h1>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <p><bold>* marked fields cannot be blank</bold></p>
                        <Form.Label>Password *</Form.Label>
                        <Form.Control onChange={(e) => setCurrentPassword(e.target.value)} type="password" placeholder="Enter Current Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password *</Form.Label>
                        <Form.Control onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="Enter New Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm New Password *</Form.Label>
                        <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm New Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => changeProfile(e)}>
                        Submit
                    </Button>
                </Form>
                <Container className="connected-acc" fluid style={{ marginTop: 10, marginBottom: 10 }}>
                    <h5 style={{ marginBottom: 20 }}>Connected Accounts :</h5>
                    {
                        localStorage.getItem("login") === "Google" ?
                            <a className="google"><i class="fab fa-google"></i><span style={{ marginRight: 15 }}></span>Google</a>
                            :
                            <>
                            </>
                    }
                    {
                        localStorage.getItem("login") === "Facebook" ?
                            <a className="facebook"><i class="fab fa-facebook-f"><span style={{ marginRight: 15 }}></span></i>Facebook</a>
                            :
                            <>
                            </>
                    }
                </Container>
                <Container style={{ height: 50 }}>

                </Container>
            </Container>
        </div>
    )
}

export default Profile
