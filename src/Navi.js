import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function Navi() {
  return (
    <div><Navbar bg="secondary" variant="secondary">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#Blog">Blog</Nav.Link>
        <Button variant="outline-primary">Login</Button>{' '}
      </Nav>
    </Container>
  </Navbar>
</div>
  )
}

export default Navi