import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './Home.css';

export const Home = () => (
    <Container>
        <div>
            <h2>Casco</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, at! Porro sequi distinctio eveniet beatae eaque eum! Magni eos facere tenetur aliquid nemo. Obcaecati quae vel enim veniam ut aperiam.</p>
        </div>
        <Row className="show-grid text center">
            <Col xs={12} sm={4} classname="room-wrapper">
                <Image src="assets/growRoom.png" rounded className="spaced-pics" id="left" />

            </Col>
            <Col xs={12} sm={4} classname="room-wrapper">
                <Image src="assets/logo1.jpg" roundedCircle className="spaced-pics" />

            </Col>
            <Col xs={12} sm={4} classname="room-wrapper">
                <Image src="assets/soil.png" rounded className="spaced-pics" id="right" />

            </Col>
        </Row>
    </Container>
)