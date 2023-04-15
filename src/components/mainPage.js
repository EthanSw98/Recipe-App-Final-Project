

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



export function MainPage() {
    return(
        <Container className ='vh-100 d-flex flex-column'>
                <Row className ='h-50'>
                    <Col className = 'd-flex justify-content-center align-items-center'>
                        <h1>Breakfast</h1>
                        </Col>
                    <Col className = 'd-flex justify-content-center align-items-center'>
                        <h1>Lunch</h1>
                    </Col>
                </Row>
                <Row className = 'h-50'>
                    <Col className = 'd-flex justify-content-center align-items-center'>
                        <h1>Dinner</h1>
                    </Col>
                    <Col className = 'd-flex justify-content-center align-items-center'>
                        <h1>Snacks</h1>
                    </Col>
                </Row>
          </Container>
    )
    
    
}

