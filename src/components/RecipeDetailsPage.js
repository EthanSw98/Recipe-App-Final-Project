import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import {UpdateForm} from './updateForm.js';
import Form from 'react-bootstrap/Form';

export function RecipeDetailsPage({ recipes, deleteRecipe, updateRecipe, fetchRecipes }) {

    let recipeId = useParams()
    let rId = recipeId.id

    const recipe =  recipes.find(r => r.id === rId); 

    



    const ingredientArray = recipe.ingredients.split(',');

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
        <Container className ='vh-100 d-flex flex-column'>
            <Row>
                <div className = ' card d-flex justify-content-center align-items-center bg-primary'>
                    <h1>{recipe.recipeName }</h1>
                </div>
            </Row>
            <Row className =' h-100'>
                    <Col className=' card'>
                        <Row className = 'card d-flex justify-content-center'>
                            <div className = 'd-flex justify-content-center'>
                                <h4>Whats for {recipe.mealType} today?</h4>   
                            </div>
                        </Row>
                        <Row>
                            <h2>Ingredients:</h2>
                            <ListGroup>
                            {ingredientArray.map((ingredient) => {
                                return(
                                    <ListGroup.Item key = {ingredientKey += 1}>{ingredient}</ListGroup.Item>
                                )
                            })}
                            </ListGroup>
                        </Row>
                        <Row className = 'card '>
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Enter Ingredients Here: Please seperate ingredients with a space.</Form.Label>
                                    <Form.Control id="ingredients" as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Enter Instructions Here</Form.Label>
                                    <Form.Control id="instructions" as="textarea" rows={3} />
                                </Form.Group>
                                <button type='submit'>Submit</button>  
                            </Form>
                        </Row>
                    </Col>
                    <Col>
                        <Row className = 'card h-50'>
                            <Image className ='h-100' src ={recipe.img} alt=""></Image>
                        </Row>
                        <Row>
                            <h2>Preperation Instructions:</h2>
                            <h5>{recipe.instructions}</h5>
                            <button type = 'button' onClick = {() => deleteRecipe(recipe.id)}>Delete</button>
                        </Row>
                    </Col>
            </Row>

            {/* <Row>
                <Col>
                    <h4>{recipe.mealType}</h4>
                    <p>{recipe.ingredients}</p>
                </Col>
                <Col>
                <p>{recipe.instructions}</p>
                </Col>
            </Row> */}
        </Container>
    )
}