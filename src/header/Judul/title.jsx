import React from "react";
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

let Judul = () => {
    return(
        <>
        <div className="Title">
            <h1>N e t l a b <span class="tab">B o o k s t o r e</span></h1>
        </div>
        <Container>
        <Navbar className="justify-content-center">
        <Nav className="justify-content-center">
            <Nav.Link href="">Home <span class="jarak"></span></Nav.Link>
            <Nav.Link href="About">About <span class="jarak"></span></Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
        </Navbar>
        </Container>
        </>
    )
}

export default Judul;