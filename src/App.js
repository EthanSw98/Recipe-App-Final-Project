
import { MainPage } from './components/mainPage.js'
import {RecipeNavbar} from './components/RecipeNavbar.js'
import { Breakfast } from './components/Breakfast'
import { Lunch } from './components/Lunch.js'
import { Dinner } from './components/Dinner.js'
import { Snacks } from './components/Snacks.js'
import {Route, Routes } from 'react-router-dom'
import {recipesApi} from './components/RecipeApi.js';
import { useState, useEffect} from 'react';
import {RecipeDetailsPage} from './components/RecipeDetailsPage.js';


export default function App(){

  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []); 

    const fetchRecipes = async() => {
        const addRecipe = await recipesApi.get();
        setRecipes(addRecipe)
    };

    const createRecipe = async(recipe) => {
        await recipesApi.post(recipe);
        fetchRecipes();
    };

    const updateRecipe = async(recipes) =>{
        await recipesApi.put(recipes);
        fetchRecipes();
    }

    const deleteRecipe = async(id) => {
        await recipesApi.delete(id)
        fetchRecipes();
    }


  return(
    <div>
            <div>
                < RecipeNavbar/>
            </div>
            <Routes>
              <Route path = '/' element ={<MainPage />} />
              <Route path = '/breakfast' element ={< Breakfast recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} />} />
              <Route path = '/lunch' element ={ <Lunch /> } />
              <Route path = '/dinner' element ={< Dinner />} />
              <Route path = '/snacks' element ={< Snacks />} />
              <Route path = '/:mealtype/recipes/:id' element = {<RecipeDetailsPage recipes = {recipes} />} />
            </Routes>
        </div>
  )
}


