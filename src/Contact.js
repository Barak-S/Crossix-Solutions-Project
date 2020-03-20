import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

import './App.css';

export default function Contact(){
    return(
        <div className="contact">
            <Card style={{ margin: "3.25%", }}>
                <Card.Header style={{color: "#013C71", fontSize: 17, paddingBottom: 8, fontWeight: "700", }}>Contact</Card.Header>
                <Card.Body>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                <Image src="../headshot.png" thumbnail />
                                <Card.Title style={{paddingTop:12, color: "#013C71"}}>Barak Saidoff</Card.Title>
                                <Card.Text style={{color: "#013C71"}}>Full Stack Software Developer</Card.Text>
                                </Col>
                                <Col>
                                <ul className="navbar-nav">
                                    <li>
                                        <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" style={{height: 63, padding:10,}} onClick={()=> window.open("https://www.linkedin.com/in/barak-saidoff-3a2a36b2/", "_blank")} alt="LinkedIn"></img>
                                    </li>
                                    <li>
                                        <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" style={{height: 63, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}alt="GitHub"></img>
                                    </li>
                                </ul>
                                </Col>
                                
                            </Row>
                        </Container>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}