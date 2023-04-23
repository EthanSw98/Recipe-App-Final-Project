
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';


export function RecipeList({recipes,mealType,icon}) {


    return(

        <Card className = ' text-success border-primary recipeDiv'>
            <Card.Header className='bg-info text-dark d-flex justify-content-center text-decoration-none' as={Link} to ={`/${mealType}`}><h4>{icon}{mealType} Recipes{icon}</h4> </Card.Header>
            <Card.Body className='bg-dark '>
                {recipes.map((recipe) => {
                    if(recipe.mealType === mealType){
                        return(
                        <Link  to ={`/${recipe.id}`} key = {recipe.id}>
                            <Card className='card recipeCard d-flex align-items-center justify-content-center border-primary text-dark '>
                                <h4>{recipe.recipeName}</h4>
                            </Card>
                        </Link>
                        )
                    }
                })}
            </Card.Body>
        </Card>

    // <div className = 'recipeDiv'>
        // {recipes.map((recipe) => {
        //     if(recipe.mealType === mealType){
        //         return(
        //         <Link  to ={`/${recipe.id}`} key = {recipe.id}>
        //             <div className='recipeCard card d-flex align-items-center justify-content-center' >
        //                 <h4>{recipe.recipeName}</h4>
        //             </div>
        //         </Link>
        //         )
        //     }
    //     })}
    // </div>

    )

    
}