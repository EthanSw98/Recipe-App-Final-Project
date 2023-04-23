

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {RecipeList} from './recipeList.js'




export function MainPage({recipes, bacon, burger, pizza, veggie}) {
    return(
        <div>
            <div className=' d-flex justify-content-center text-white '>
                <h1>What should I make today?</h1>
            </div>
            <Container className ='vh-100 d-flex'>
                <Row xs={1} md={2} className="g-4 w-100 ">
                        <Col className = 'h-50'>
                            < RecipeList recipes ={recipes} mealType = 'Breakfast' icon = {bacon} />
                        </Col>
                        <Col className = 'h-50'>
                            < RecipeList recipes ={recipes} mealType = 'Lunch' icon = {burger} />
                        </Col>
                        <Col className = 'h-50'>
                            < RecipeList recipes = {recipes} mealType = 'Dinner' icon = {pizza} />
                        </Col>
                        <Col className = 'h-50'>
                            < RecipeList recipes ={recipes} mealType = 'Sides' icon = {veggie} />
                        </Col>
                </Row>
            </Container>
        </div>
        
    )
    
    
}

