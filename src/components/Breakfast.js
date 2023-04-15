
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {recipesApi} from './RecipeApi.js';
import { useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {RecipeList} from './recipeList.js';
import {RecipeForm} from './recipeForm.js'

export function Breakfast({recipes, createRecipe, fetchRecipes, updateRecipe, deleteRecipe}){


    return(
        <Container className ='vh-100 d-flex flex-column'>
                <Row className = 'h-100 d-flex justify-content-center align-items-center'>
                    <Col className = ' card d-flex justify-content-center h-50 '>< RecipeForm createRecipe = {createRecipe} fetchRecipes ={fetchRecipes} recipes = {recipes} /></Col>
                    <Col className = ' listcard card d-flex justify-content-center h-75'> < RecipeList recipes ={recipes} updateRecipe = {updateRecipe} deleteRecipe = {deleteRecipe}/></Col>
                </Row>
          </Container>
    )
}