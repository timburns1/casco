import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './Home.css';

require('dotenv').config();
console.log(process.env)

function Map() {
    return (<GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 43.659100, lng: -70.256821 }}
    />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const Home = () => (
    <Container>
        <div>
            <h2>Of The Seed, Of The Soul</h2>
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

        <div className="news">
            <h2>News</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt corporis quidem nisi explicabo eum adipisci vitae, dolore, mollitia aspernatur ducimus, quia tenetur velit officia sint soluta quasi nemo asperiores veniam.</p>
        </div>

        <div className="prods">
            <h2>Find Our Products</h2>
            <div style={{ width: '50vw', height: '50vh' }} className="maps">
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAfLM5xLx__EdvDSRloFna1uYX89NPkdt0`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}

                />
            </div>
        </div>
    </Container>
)