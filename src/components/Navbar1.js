import axios from "axios"
import cookie from "js-cookie"
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "../css/Navbar1.css"
import logo from "../images/logo.png"
import { setUserLoginStatus } from "../redux/loginTypes"

const Navbar1 = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState({})
    const loginStatus = useSelector(state => state.login.loginStatus)
    const handleLogout = async () => {
        const res = await axios.get("http://localhost:5000/api/user/logout")
        cookie.remove("jwt")
        cookie.remove("name")
        cookie.remove("email")
        localStorage.removeItem("token")
        localStorage.removeItem("login")
        alert(res.data.message)
        dispatch(setUserLoginStatus(false))
        setValue({})
    }
    return (
        <Navbar className="Navbar-1" bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand style={{ cursor: "pointer" }}><NavLink className="nav-items" exact to="/"><img src={logo}></img></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ml-auto">
                    <Nav className="ms-auto">
                        <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/features">Features</NavLink></Nav.Link>
                        <NavDropdown className="nav-items" title="Solutions" id="basic-nav-dropdown">
                            <NavDropdown.Item><NavLink style={{ color: "black" }} exact to="/packages">Training Packages</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink style={{ color: "black" }} exact to="/solution2">Solution 2</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/contact">Contact Us</NavLink></Nav.Link>
                        {
                            cookie.get("jwt") && cookie.get("name") && cookie.get("email") ?
                                <>
                                    <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/profile">Profile</NavLink></Nav.Link>
                                    <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/twilio">Twilio</NavLink></Nav.Link>
                                    <Nav.Link><NavLink activeClassName="active" className="nav-items" onClick={() => handleLogout()} exact to="/login">Logout</NavLink></Nav.Link>

                                </>
                                :
                                <Nav.Link><NavLink activeClassName="active" className="nav-items" exact to="/login">Login</NavLink></Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar1
