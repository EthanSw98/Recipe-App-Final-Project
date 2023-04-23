import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import{LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'


 export function RecipeNavbar() {
    return(
        <Navbar bg="primary" text='dark' className="me-auto">
        <Container fluid>
            <Navbar.Brand as={Link} to='/'>What Should I Cook Today?</Navbar.Brand> 
          <Navbar.Toggle  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link> 
                <Nav.Link as={Link} to='/breakfast'>Breakfast</Nav.Link> 
                <Nav.Link as={Link} to='/lunch'>Lunch</Nav.Link> 
                <Nav.Link as={Link} to='/dinner'>Dinner</Nav.Link> 
                <Nav.Link as={Link} to='/sides'>Sides</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
 }

 