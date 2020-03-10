import React from 'react';
import { Jumbotron as Jumbo, Container, ButtonToolbar } from 'react-bootstrap';
import styled from 'styled-components';
// import Logo2 from '../../public/assets/logo2.jpg';
import { Link, Router } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Styles = styled.div`
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

    }
    .jumbo {
        
        background-size:cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }
`;
function Jumbotron() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome to Casco Botanical</h1>
                    <p>If you are a client, please click Log In below</p>
                </Container>

                <ButtonToolbar>
                    <Button type="submit" href="/src/About.jsx">Log In</Button>
                </ButtonToolbar>

            </Jumbo>
        </Styles>

    );
}

export default Jumbotron;
