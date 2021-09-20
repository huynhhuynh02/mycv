import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import TitleSection from "../components/TitleSection";
import hero from '../assets/images/hero.png';
import ResumeItem from '../components/ResumeItem';
import ServiceItem from '../components/ServiceItem';
import { FaCode } from "react-icons/fa";
function ResumePage(props) {
    return (
        <>
            <TitleSection title="Resume" breadcrumb={['Home', 'Resume']} />
            <div className="about-section">
                <Container>
                    <Row>
                        <Col md={3}>
                            <Image fluid  src={hero} roundedCircle />
                        </Col>
                        <Col md={9}>
                            <p className="mb-4">Hello! I’m John Doe. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.</p>
                            <Row>
                                <Col md={4}>
                                    <p><span className="strong">Age:</span>24</p>
                                    <p><span className="strong">Address:</span>San Francisco, USA</p>
                                </Col>
                                <Col md={4}>
                                    <p><span className="strong">Residence:</span>USA</p>
                                    <p><span className="strong">Phone:</span>+1 256 254 84 56</p>
                                </Col>
                                <Col md={4}>
                                    <p><span className="strong">Freelance:</span>Available</p>
                                    <p><span className="strong">E-mail:</span>smorgan@domain.com</p>
                                </Col>
                                <Col md={12}>
                                    <Button variant="danger" className="mt-3">Dowload CV</Button>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            <div className="education-section py-4">
                <Container className="py-4">
                    <Row>
                        <Col md={6}>
                            <ResumeItem startdate="2014" enddate="2019" name="Front-End Developer - Google Inc." description="Collaborate with creative and development teams on the execution of ideas."/>
                            <ResumeItem startdate="2014" enddate="2019" name="Senior Developer - ABC Inc." description="Collaborate with creative and development teams on the execution of ideas."/>
                            <ResumeItem active startdate="2014" enddate="2019" name="Art Director - Facebook Inc." description="Collaborate with creative and development teams on the execution of ideas."/>
                        </Col>
                        <Col md={6}>
                            <ResumeItem startdate="2014" enddate="2019" name="Front-End Developer - Google Inc." description="Collaborate with creative and development teams on the execution of ideas."/>
                            <ResumeItem startdate="2014" enddate="2019" name="Senior Developer - ABC Inc." description="Collaborate with creative and development teams on the execution of ideas."/>
                            <ResumeItem active startdate="2014" enddate="2019" name="Art Director - Facebook Inc." description="Collaborate with creative and development teams on the execution of ideas."/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="service-section">
                <Container>
                    <Row>
                        <Col md={4}>
                            <ServiceItem name="Web Development" text="Modern and mobile-ready website that will help you reach all of your marketing">
                                <FaCode/>
                            </ServiceItem>
                        </Col>
                        <Col md={4}>
                            <ServiceItem name="Web Development" text="Modern and mobile-ready website that will help you reach all of your marketing">
                                <FaCode/>
                            </ServiceItem>
                        </Col>
                        <Col md={4}>
                            <ServiceItem name="Web Development" text="Modern and mobile-ready website that will help you reach all of your marketing">
                                <FaCode/>
                            </ServiceItem>
                        </Col>
                        <Col md={4}>
                            <ServiceItem name="Web Development" text="Modern and mobile-ready website that will help you reach all of your marketing">
                                <FaCode/>
                            </ServiceItem>
                        </Col>
                        <Col md={4}>
                            <ServiceItem name="Web Development" text="Modern and mobile-ready website that will help you reach all of your marketing">
                                <FaCode/>
                            </ServiceItem>
                        </Col>
                        <Col md={4}>
                            <ServiceItem name="Web Development" text="Modern and mobile-ready website that will help you reach all of your marketing">
                                <FaCode/>
                            </ServiceItem>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="skill-section">

            </div>
            <div className="knowledge-section">

            </div>
        </>
    );
}
export default ResumePage;