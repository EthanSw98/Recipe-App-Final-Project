import Form from 'react-bootstrap/Form';

export function UpdateForm( rId, fetchRecipes,updateRecipe) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedRecipe = {
            ingredients: document.getElementById('ingredients').value,
            instructions: document.getElementById('instructions').value,
        }

        updateRecipe(updatedRecipe, rId);

        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';

    }
    
    return(
            <Form onSubmit = { e => handleSubmit(e)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter Ingredients Here: Please put 1 space between ingredients.</Form.Label>
                    <Form.Control id="ingredients" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter Instructions Here</Form.Label>
                    <Form.Control id="instructions" as="textarea" rows={3} />
                </Form.Group>
                <button type='submit'>Submit</button>  
            </Form>
        )

}