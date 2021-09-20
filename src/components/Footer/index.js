import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="App-Footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="copyright">
                            &copy; 2021 Huynhpx. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link className="nav-link" to="/"><FaGithub/></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="resume"><FaTwitter/></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="portfolio"><FaInstagram/></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="blog"><FaLinkedin/></Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;