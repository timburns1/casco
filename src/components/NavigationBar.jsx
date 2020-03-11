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

// TODO: add an onClick function to the logout link
// onClick function should log the user out and set this.state.authenticated
// to false in the App.js file
export const NavigationBar = (props) => (
    <Styles>
        {console.log('nav props', props)}
        <Navbar expand="lg">
            <Navbar.Brand href="/home">Casco Botanical</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
                {/* <Nav.Item><Nav.Link href="/home">Home </Nav.Link></Nav.Item> */}
                <Nav.Item><Nav.Link href="/about">About Us</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/products">Products</Nav.Link></Nav.Item>
                {!props.auth ? (
                    <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                ) : (
                        <Nav.Item><Nav.Link href="/home">Logout</Nav.Link></Nav.Item>
                    )}
            </Nav>
        </Navbar>
    </Styles>
)

