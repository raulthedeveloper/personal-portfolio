import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'


        

export default function navigation() {
    return (
        <div>


<Navbar variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/" ><span className="section-header">Raul Rodriguez</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
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
