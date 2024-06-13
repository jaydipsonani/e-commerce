import React from 'react'
import './css/Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={3} sm={6}>
                            <h4>About Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6}>
                            <h4>Customer Service</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Shipping</a></li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6}>
                            <h4>Connect with Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6}>
                            <h4>Legal</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                        </Col>
                        <Col md={6} className="text-md-end">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="#">Terms of Service</a></li>
                                <li className="list-inline-item"><a href="#">Contact Us</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer