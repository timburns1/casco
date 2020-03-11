import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './Products.css';

export const Products = () => (
    <div>
        <Image src="assets/logo2.jpg" className="headerImage" />
        <Container className="productsLay">
            <h2>Our Products</h2>
            <Row>
                <Col xs={12} sm={8} >
                    <Link to="assets/captiansCakeTest.png">
                        <Image src="assets/captiansCake.png" className="flowers" rounded />
                    </Link>
                    <h3>Captian's Cake</h3>
                    <p>Captain’s Cake by The Captain’s Connection is a hybrid cross between Girl Scout Cookies and White Fire Alien OG. With bright citrus terpenes on the nose and palate, and a sweet doughy earth aroma, Captain’s Cake is a crowd-pleaser with enjoyable relaxing effects. This strain is euphoric and easy on the limbs in small doses, but can get rather sedating with heavy consumption. Enjoy the laid-back energy of Captain’s Cake into the evening to set you up for a good night’s rest.  </p>
                </Col>
                <Col xs={12} sm={8} >
                    <Image src="assets/gorillaGlue.png" className="flowers" id="soilResults" rounded />
                    <h3>Gorilla Glue</h3>
                    <p>Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains, Chem’s Sister, Sour Dubb, and Chocolate Diesel. Taking first place in both the Michigan and Los Angeles 2014 Cannabis Cups as well as the High Times Jamaican World Cup, this multiple award-winning hybrid's supremacy is no longer a secret, and consumers will search far and wide to get their hands sticky with Original Glue.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={8} >
                    <Image src="assets/ghost.png" className="flowers" rounded />
                    <h3>Ghost OG</h3>
                    <p>Ghost OG, a cut of OG Kush, is a hybrid strain loved for its balanced cerebral and body effects. Often described as simultaneously potent and non-intrusive, Ghost OG has won itself Cup awards and renown among consumers. Its strong citrus smell and crystal-covered buds hint at this strain’s strong genetics and its ability to annihilate pain, insomnia, depression, and anxiety. </p>
                </Col>
                <Col xs={12} sm={8} >
                    <Image src="assets/coffeeCBD.png" className="flowers" rounded />
                </Col>
                <Col xs={12} sm={8} >
                    <Image src="assets/coffeeTHC.png" className="flowers" rounded />
                </Col>
            </Row>
        </Container>
    </div>
)