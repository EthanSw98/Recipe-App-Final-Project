import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {RecipeList} from './recipeList.js';
import {RecipeForm} from './recipeForm.js';
import Card from 'react-bootstrap/Card';

export function Sides({ recipes, createRecipe, fetchRecipes}){
    return(
    <div>
        <div>
            <h2 className='d-flex justify-content-center'>Sides</h2>
        </div>
        <Container className ='vh-100 d-flex'>
            <Row xs={1} md={2} className=" w-100 h-100">
                    <Col>
                        <Card className = 'h-100'>
                        < RecipeForm createRecipe = {createRecipe} fetchRecipes = {fetchRecipes} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className = 'h-100'>
                            < RecipeList recipes ={recipes} mealType = 'Sides' />
                        </Card>
                    </Col>
                    
            </Row>
        </Container>
    </div>
    )
}