import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export function RecipeForm({recipes, fetchRecipes, createRecipe}) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const anotherRecipe = {
            mealType: document.getElementById('mealtype').value,
            recipeName: document.getElementById('recipeName').value,
            img: document.getElementById('img').value,
            ingredients: document.getElementById('ingredients').value,
            instructions: document.getElementById('instructions').value,
        }

        createRecipe({...anotherRecipe}).then(fetchRecipes());

        document.getElementById('recipeName').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';

    }
    return(

        <Card>
            <Card.Header as="h5">Add Your Recipe </Card.Header>
            <Card.Body>
                <Form onSubmit = {handleSubmit}>
                 <Form.Group className="mb-3" >
                     <Form.Label>Recipe Name</Form.Label>
                     <Form.Control id="recipeName" type="text" placeholder="Recipe Name" />
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Select Meal Type</Form.Label>
                     <Form.Select id="mealtype">
                         <option value="Breakfast">Breakfast</option>
                         <option value="Lunch">Lunch</option>
                         <option value="Dinner">Dinner</option>
                         <option value="Sides">Sides</option>
                     </Form.Select>
                 </Form.Group>
                 <Form.Group className="mb-3" >
                     <Form.Label>Enter the URL for an image</Form.Label>
                     <Form.Control id="img" type="text" placeholder ='Image URL'/>
                 </Form.Group>
                 <Form.Group className="mb-3" >
                     <Form.Label>Enter Ingredients Here: Please seperate ingredients with a comma.</Form.Label>
                     <Form.Control id="ingredients" as="textarea" rows={3} />
                 </Form.Group>
                 <Form.Group className="mb-3" >
                     <Form.Label>Enter Instructions Here</Form.Label>
                     <Form.Control id="instructions" as="textarea" rows={3} />
                 </Form.Group>
                <button type='submit'>Submit</button>  
             </Form>
            </Card.Body>
        </Card>



        // <div>
        //     <div className='card'>
        //         <h2>Add a recipe!</h2>
        //     </div>
        //     <Form onSubmit = {handleSubmit}>
        //     <Form.Group className="mb-3" >
        //         <Form.Label>Recipe Name</Form.Label>
        //         <Form.Control id="recipeName" type="text" placeholder="Recipe Name" />
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Select Meal Type</Form.Label>
        //         <Form.Select id="mealtype">
        //             <option value="Breakfast">Breakfast</option>
        //             <option value="Lunch">Lunch</option>
        //             <option value="Dinner">Dinner</option>
        //             <option value="Snacks">Snacks</option>
        //         </Form.Select>
        //     </Form.Group>
        //     <Form.Group className="mb-3" >
        //         <Form.Label>Enter the URL for an image</Form.Label>
        //         <Form.Control id="img" type="text" placeholder ='Image URL'/>
        //     </Form.Group>
        //     <Form.Group className="mb-3" >
        //         <Form.Label>Enter Ingredients Here: Please put 1 space between ingredients.</Form.Label>
        //         <Form.Control id="ingredients" as="textarea" rows={3} />
        //     </Form.Group>
        //     <Form.Group className="mb-3" >
        //         <Form.Label>Enter Instructions Here</Form.Label>
        //         <Form.Control id="instructions" as="textarea" rows={3} />
        //     </Form.Group>
        //     <button type='submit'>Submit</button>  
        // </Form>
        // </div>
        
        );

}