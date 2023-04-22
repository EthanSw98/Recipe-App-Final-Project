
import { MainPage } from './components/mainPage.js'
import {RecipeNavbar} from './components/RecipeNavbar.js'
import { Breakfast } from './components/Breakfast'
import { Lunch } from './components/Lunch.js'
import { Dinner } from './components/Dinner.js'
import { Sides } from './components/Sides.js'
import {Route, Routes } from 'react-router-dom'
import {recipesApi} from './components/RecipeApi.js';
import { useState, useEffect} from 'react';
import {RecipeDetailsPage} from './components/RecipeDetailsPage.js';
import { useNavigate } from "react-router-dom";


export default function App(){

  const navigate = useNavigate();


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

    const updateRecipe = async(recipe, id) =>{
        await recipesApi.put(recipe, id);
        fetchRecipes();
    }

    const deleteRecipe = async(id) => {
        await recipesApi.delete(id)
        fetchRecipes();
        navigate('/');
    }


  return(
    <div>
            <div>
                < RecipeNavbar/>
            </div>
            <Routes>
              <Route path = '/' element ={<MainPage recipes = {recipes}/>} />
              <Route path = '/breakfast' element ={< Breakfast recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} />} />
              <Route path = '/lunch' element ={ <Lunch recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} /> } />
              <Route path = '/dinner' element ={< Dinner recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} />} />
              <Route path = '/sides' element ={< Sides recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} />} />
              <Route path = '/:id' element = {<RecipeDetailsPage recipes = {recipes} fetchRecipes = {fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} />} />
            </Routes>
        </div>
  )
}


