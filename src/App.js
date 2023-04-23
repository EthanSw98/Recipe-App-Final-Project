
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice  } from '@fortawesome/free-solid-svg-icons'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


export default function App(){

  const navigate = useNavigate();    // will allow to navigate back to homepage after delete is called


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

    const bacon = <FontAwesomeIcon icon={faBacon} />  
    const burger = <FontAwesomeIcon icon={faBurger} />
    const pizza = <FontAwesomeIcon icon={faPizzaSlice} />
    const veggie = <FontAwesomeIcon icon={faCarrot} />   //different icons set as props 



  return(
            <div className = "body">
              < RecipeNavbar/>
              <Routes>
              <Route path = '/' element ={<MainPage recipes = {recipes} bacon = {bacon} burger = {burger} pizza = {pizza} veggie = {veggie}/>} />
              <Route path = '/breakfast' element ={< Breakfast recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} bacon = {bacon} />} />
              <Route path = '/lunch' element ={ <Lunch recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} burger = {burger}/> } />
              <Route path = '/dinner' element ={< Dinner recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} pizza = {pizza} />} />
              <Route path = '/sides' element ={< Sides recipes = {recipes} fetchRecipes ={fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} createRecipe ={createRecipe} veggie = {veggie} />} />
              <Route path = '/:id' element = {<RecipeDetailsPage recipes = {recipes} fetchRecipes = {fetchRecipes} updateRecipe ={updateRecipe} deleteRecipe ={deleteRecipe} />} />
              //this last route will be accessed when a link directs to the id of a recipe
            </Routes> 
            </div>
  )
}


