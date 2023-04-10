import {Route, Routes } from 'react-router-dom'
import { MainPage } from './components/mainPage.js'
import { Breakfast } from './components/Breakfast'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


export default function App(){
  return(
    <div>
      <div>
        <Navbar bg="light" expand="sm">
            <Container>
              <Navbar.Brand href="localhost:3000/">What Should I Cook Today?</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="localhost:3000/">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

      </div>
      <div>
        <Routes>
          <Route path = '/' element ={ <MainPage /> } />
          <Route path = '/breakfast' element ={< Breakfast />} />

        </Routes>
      </div>
    </div>
  )
}


