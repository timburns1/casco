import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './About.css';

export const About = () => (
    <div>
        <Image src="assets/logo2.jpg" className="headerImage" />
        <Container className="aboutLay">
            <h3>Our Compost</h3>
            <p>We use a diverse set of growing methods. Our nutrient rich compost made in-house is an integral part to all of these.⠀</p>
            <Row>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/soilBarrel3.png" className="aboutSoil" rounded />
                </Col>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/soilTest.png" className="aboutSoil" id="soilResults" rounded />
                </Col>
            </Row>
            <Col xs={12} sm={8} smOffset={2}>
                <Image src="assets/soilMix.png" className="aboutSoil" rounded />
            </Col>
            <Col xs={12} sm={8} smOffset={2}>
                <Image src="assets/soilBarrel2.png" className="aboutSoil" rounded />
            </Col>
            <Col xs={12} sm={8} smOffset={2}>
                <Image src="assets/soilBarrel.png" className="aboutSoil" rounded />
            </Col>
        </Container>
    </div>
)