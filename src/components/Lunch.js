
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {RecipeList} from './recipeList.js';
import {RecipeForm} from './recipeForm.js';
import Card from 'react-bootstrap/Card';

export function Lunch({ recipes, createRecipe, fetchRecipes, burger}){
    return(
        <div>
            <div>
                <h1 className='d-flex justify-content-center text-white'>Lunch Recipes</h1>
            </div>
            <Container className ='vh-100 d-flex'>
                <Row xs={1} md={2} className=" w-100 h-100">
                        <Col>
                            < RecipeForm createRecipe = {createRecipe} fetchRecipes = {fetchRecipes} />
                        </Col>
                        <Col>
                                < RecipeList recipes ={recipes} mealType = 'Lunch' icon = {burger}/>
                        </Col>
                        
                </Row>
            </Container>
        </div>
    )
}