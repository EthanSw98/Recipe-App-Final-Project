import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import{LinkContainer} from 'react-router-bootstrap'


 export function RecipeNavbar() {
    return(
        <Navbar bg="secondary" className="me-auto">
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand>What Should I Cook Today?</Navbar.Brand> 
          </LinkContainer>
          <Navbar.Toggle  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link> 
              </LinkContainer>
              <LinkContainer to="/breakfast">
                <Nav.Link>Breakfast</Nav.Link> 
              </LinkContainer>
              <LinkContainer to="/lunch">
                <Nav.Link>Lunch</Nav.Link> 
              </LinkContainer>
              <LinkContainer to="/dinner">
                <Nav.Link>Dinner</Nav.Link> 
              </LinkContainer>
              <LinkContainer to="/snacks">
                <Nav.Link>Snacks</Nav.Link> 
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
 }

 