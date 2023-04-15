
const RECIPES_ENDPOINT = "https://6434c84583a30bc9ad5128c5.mockapi.io/RecipeList";

class RecipesApi {
    get = async () => {
        try{
            const resp = await fetch (RECIPES_ENDPOINT);
            const data = await resp.json();
            return data;
        }catch(e){
            console.log('Oops, looks like fetchRecipes had an issue', e);
        }
    }

    put = async(recipe,id) => {
        try{
            const resp = await fetch(`${RECIPES_ENDPOINT}/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe)
            });
            return await resp.json();
        }catch(e){
            console.log('Oops, looks like there was an issue with updating Comment,', e);
        }      
    }

    post = async(recipe) => {
        try{
            const resp = await fetch(`${RECIPES_ENDPOINT}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(recipe),
            });
            const data = await resp.json();
            return data;
        }catch(e){
            console.log('oops! post did not work!', e);
        }
    }

    delete = async(id) => {
        try{
            const resp = await fetch(`${RECIPES_ENDPOINT}/${id}` , {
                method: "DELETE"
            });
            return resp.json

        }catch(e){
            console.log('oops error', e);
        }
    }
    
}

export const recipesApi = new RecipesApi();