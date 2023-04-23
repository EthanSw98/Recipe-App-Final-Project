import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export function RecipeDetailsPage({ recipes, deleteRecipe, updateRecipe, fetchRecipes }) {

    let recipeId = useParams()  //this takes the params, the link sent us to the recipes id

    let rId = recipeId.id  //this sets the returned params from a string to a number

    const recipe =  recipes.find(r => r.id === rId); // this returns the recipe that matches the ID in the params

    if (!recipe) return <div>Loading...</div>  //this makes sure if the useEffect isnt responding in time, for the page to wait

    const ingredientArray = recipe.ingredients.split(',');  // this takes the string from the ingredients input, and it turns it into an array 

    let ingredientKey = 0;

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedRecipe = {
            ingredients: document.getElementById('ingredients').value,
            instructions: document.getElementById('instructions').value,
        }

        updateRecipe({...updatedRecipe}, rId).then(fetchRecipes());

        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';

    }





    return (
        <Container className ='vh-100 d-flex flex-column custContainer'>
            <Card className='bg-dark'>
                <Card.Header className = 'bg-info d-flex justify-content-center '>
                    <h1>{recipe.recipeName}</h1>
                </Card.Header>
                <Row className =' h-100'>
                    <Col className=' bg-dark card custContainer'>
                        <Card >
                             <Card.Header className='bg-info d-flex justify-content-center'>Ingredients:</Card.Header>
                            <ListGroup>
                            {ingredientArray.map((ingredient) => {
                                return(
                                    <ListGroup.Item key = {ingredientKey += 1}>{ingredient}</ListGroup.Item>
                                )
                            })}
                            </ListGroup>   
                        </Card>
                        <Card className = 'mt-5'>
                            <Card.Header className='bg-info d-flex justify-content-center'>Preperation Instructions:</Card.Header>
                            <p>{recipe.instructions}</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className = 'h-50 bg-dark'>
                            <Card.Img className='img-fluid recipePic' src ={recipe.img} alt=""></Card.Img>
                        </Card>
                        <Card >
                            <Card.Header className='bg-info d-flex justify-content-center'>Update This Recipe:</Card.Header>
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Enter New Ingredients (Please seperate ingredients with a space)</Form.Label>
                                    <Form.Control id="ingredients" as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Enter New Instructions</Form.Label>
                                    <Form.Control id="instructions" as="textarea" rows={3} />
                                </Form.Group>
                                <button type='submit'>Submit</button>  
                                <button type = 'button' onClick = {() => deleteRecipe(recipe.id)}>Delete This Recipe</button>
                            </Form> 
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}