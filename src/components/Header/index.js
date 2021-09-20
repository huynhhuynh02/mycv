import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="App-Header">
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <Link className="navbar-brand" to="/">H</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ml-auto">
                            <Nav.Item>
                                <Link className="nav-link" to="/">Hello</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="resume">Resume</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="portfolio">My Project</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="blog">Blog</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="contact">Get in touch</Link>
                            </Nav.Item>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
export default Header;