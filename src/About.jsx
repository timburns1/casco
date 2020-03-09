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
        <Container>
            <Col xs={12} sm={8} smOffset={2}>
                <Image src="assets/soilBarrel3.png" className="aboutSoil" rounded></Image>
            </Col>
        </Container>
    </div>
)