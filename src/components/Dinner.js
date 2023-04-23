
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {RecipeList} from './recipeList.js';
import {RecipeForm} from './recipeForm.js';
import Card from 'react-bootstrap/Card';

export function Dinner({ recipes, createRecipe, fetchRecipes,pizza}){
    return(
    <div>
        <div>
            <h1 className='d-flex justify-content-center text-white'>Dinner Recipes</h1>
        </div>
        <Container className ='vh-100 d-flex'>
            <Row  className=" w-100 h-100">
                    <Col>
                        < RecipeForm createRecipe = {createRecipe} fetchRecipes = {fetchRecipes} />
                    </Col>
                    <Col>
                            < RecipeList recipes ={recipes} mealType = 'Dinner' icon = {pizza} />
                    </Col>
                    
            </Row>
        </Container>
    </div>
    )
}