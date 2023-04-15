

export function RecipeForm({recipes, fetchRecipes, createRecipe}) {

    const handleSubmit = (event) => {
        event.preventDefault();

        const anotherRecipe = {
            recipeName: document.getElementById('recipeName').value,
        }

        createRecipe({...anotherRecipe}).then(fetchRecipes());

        document.getElementById('recipeName').value = '';

    }
    return(
        <div className='card'>
            <form onSubmit = {handleSubmit}>
                <input type="text" id ='recipeName' placeholder="Enter the name of your recipe"></input>
                <button type='submit'>Submit</button>  
            </form>
            
        </div>
        );

}