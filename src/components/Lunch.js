
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export function Lunch(){
    return(
        <Container className ='vh-100 d-flex flex-column'>
                <Row className = 'h-100'>
                    <Col className = 'd-flex justify-content-center align-items-center'>Recipe Form</Col>
                    <Col className = 'd-flex justify-content-center align-items-center'>
                        <h1>Lunch Recipes</h1>
                    </Col>
                </Row>
          </Container>
    )
}