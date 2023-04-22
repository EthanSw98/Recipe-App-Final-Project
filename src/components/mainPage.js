

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {RecipeList} from './recipeList.js'
import Card from 'react-bootstrap/Card';



export function MainPage({recipes}) {
    return(
        <div>
            <div className='d-flex justify-content-center'>
                <h2>What should I make today? Record your recipes here</h2>
            </div>
            <Container className ='vh-100 d-flex'>
                <Row xs={1} md={2} className="g-4 w-100 ">
                        <Col className = 'h-50'>
                            < RecipeList recipes ={recipes} mealType = 'Breakfast' />
                        </Col>
                        <Col className = 'h-50'>
                            < RecipeList recipes ={recipes} mealType = 'Lunch' />
                        </Col>
                        <Col className = 'h-50'>
                            < RecipeList recipes = {recipes} mealType = 'Dinner' />
                        </Col>
                        <Col className = 'h-50'>
                            < RecipeList recipes ={recipes} mealType = 'Sides' />
                        </Col>
                </Row>
            </Container>
        </div>
        
    )
    
    
}

