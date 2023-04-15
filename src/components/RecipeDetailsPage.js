import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

export function RecipeDetailsPage({ recipes }) {

    let recipeId = useParams()
    let rId = recipeId.id

    const recipe = recipes.find(r => r.id === rId)

    console.log(recipe)


    return (
        <div className='card'>
            <Row>
                <Col>
                    <h4>{recipe.recipeName }</h4>
                </Col>
                <Col>
                <p>{recipe.ingredients.map((ingredient) => (
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                        <div className="ms-2 me-auto">{ingredient}</div>
                        </ListGroup.Item>
                    </ListGroup>
                    ))}</p>
                </Col>
            </Row>
        </div>
    )
}