import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'


export function RecipeList({recipes, deleteRecipe, updateRecipe}) {

    const ingredientKey = 1;

    return(

    <div className = 'recipeDiv'>
        {recipes.map((recipe) => (
            <Link to ={`recipes/${recipe.id}`} key = {recipe.id}>
                <div className=' recipeCard card ' >
                    <h4>{recipe.recipeName}</h4>
                    <button type = 'button' onClick = {() => deleteRecipe(recipe.id)}>Delete</button>
                    <p>{recipe.ingredients.map((ingredient) => (
                    <ListGroup key ={ingredientKey + 1 } as="ol" numbered>
                        <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                        <div className="ms-2 me-auto">{ingredient}</div>
                        </ListGroup.Item>
                    </ListGroup>
                    ))}</p>
                </div>
            </Link>
    
            ))}
    </div>

    )

    
}