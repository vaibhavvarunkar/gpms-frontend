import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../css/contact.css"
// import contactImg from "../images/national-cancer-institute-NFvdKI.jpg"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [query, setQuery] = useState("")

    const hitContact = async (event) => {
        event.preventDefault()
        const body = {
            "name": name,
            "email": email,
            "mobile": mobile,
            "query": query
        }
        try {
            const res = await axios.post("http://localhost:5000/api/user/contact", body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            console.log(res);
            alert(res.data.message)
        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <>
            <Container fluid className="contact-1">
                <div>
                    <h1>Contact Us</h1>
                </div>
                <br>
                </br>
                <br>
                </br>
                <div className="contact-div">
                    <p>Contact us today to learn how to get started with opioid sparing pain management techniques in your clinical practice.  Our comprehensive solutions are step-by-step strategies that you can adopt to move towards opioid-free pain management. We partner with the best in the industry to use our solution with the best technologies available today. We look forward to hearing from you!</p>
                    <br>
                    </br>
                    <Row className="row">
                        <Col className="first-part" lg={7} md={12} sm={12}>
                            <div className="content">
                                <form>
                                    <h1>Get In Touch</h1>
                                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} required></input>
                                    <br></br>
                                    <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                                    <br></br>
                                    <input placeholder="Mobile No" type="tel" onChange={(e) => setMobile(e.target.value)} required></input>
                                    <br></br>
                                    <textarea placeholder="Write Your Query" onChange={(e) => setQuery(e.target.value)} required></textarea>
                                    <br></br>
                                    <button type="submit" onClick={(e) => hitContact(e)}>Submit</button>
                                </form>

                            </div>
                        </Col>
                        <Col className="second-part" lg={5} md={12} sm={12}>
                            <div className="content">
                                <h1>INFORMATION</h1>
                                <br></br>
                                <h3><i className="fas fa-envelope-open-text icon-mail"></i>  Email: <span>info@gpmsolution.org</span></h3>
                                <br></br>
                                <h3><i class="fas fa-phone-square-alt"></i>  Phone: <span>(717) 856-3966</span></h3>
                                <br></br>
                                <h3><i class="fas fa-fax"></i>  Fax: <span>(717) 856-3966</span> </h3>
                                <br></br>
                                <h3><i class="fas fa-map-marker-alt"></i>  Address: <span>1152 Mae Street #233
                                    Hummelstown,</span></h3>
                                <h3><span className="space">PA 17036.</span></h3>
                                <br></br>
                                <br></br>
                            </div>
                        </Col>
                    </Row>
                </div>


            </Container>
            <div className="tp">

            </div>
        </>
    )
}

export default Contact
