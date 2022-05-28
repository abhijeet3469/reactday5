import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';


const Appbar = () => {
  const user = false;
  return (
  <Navbar bg="dark" expand="lg" variant='dark'>
  <Container fluid>
    <Navbar.Brand href="#">PrepBytes❤️</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
      </Nav>
      {user ? <button className='btn btn-primary'>Log Out</button> : <button className='btn btn-danger'>Log In</button>}
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    // <div className='box'></div>
  )
}

export default Appbar