import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover {
        color: white
    }
}

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Casco Botanical</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/Home">Home </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/About">About </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Products">Products </Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)

