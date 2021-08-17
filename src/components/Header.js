// import axios from 'axios'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "../css/header.css"
import doc from "../images/3724894.jpg"

const Header = () => {


    return (
        <Container fluid className="header">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className="header-text">
                        <h5>Opioid-sparing, perioperative pain management strategies to optimize your pain
                            management practice.</h5>
                        <br></br>
                        <h1>Optimize Your Pain Management Practice </h1>
                        <br></br>
                        <p>Global Pain Management Solution (GPMS) offers comprehensive solutions
                            to implement opioid-sparing, perioperative pain management strategies
                            in a financially sustainable manner. Our highly experienced GPMS team
                            includes clinical professionals from across the globe.
                            GPMS will help you achieve your goals of reducing opioid use by your
                            surgery patients, while offering solutions to improve profitability in
                            your practice.</p>


                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="img">
                        <Image fluid src={doc}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
