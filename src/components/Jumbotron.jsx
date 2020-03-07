import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
// import Logo2 from '../assets/logo2.jpg';

const Styles = styled.div;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Casco Botanical</p>
            </Container>
        </Jumbo>
    </Styles>

)
