import React from 'react'
import styles from '../styles/Navigation.module.scss'
import { Nav,Navbar,Container } from 'react-bootstrap'


        

export default function navigation() {
    return (
        <div>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/AllProjects">Projects</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
 
  </div>
    )
}
