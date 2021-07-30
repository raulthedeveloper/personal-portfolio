import React from 'react'
import styles from '../styles/Navigation.module.scss'
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap'


        

export default function navigation() {
    return (
        <div>


<Navbar variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/AllProjects">Projects</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
  </div>
    )
}
