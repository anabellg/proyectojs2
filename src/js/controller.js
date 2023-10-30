import generateMarkup from './markup';
import renderSpinner from './renderSpinner';
import { result_Markup } from './results';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//#region Avance de proyecto 1. Inciso 15
const urlapi =
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886';

// La función que pide el PDF es similar a la siguiente
async function showRecipe(id) {
  const RECIP_URL = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
  const response = await fetch(RECIP_URL);
  const data = await response.json();
  const recipe = data.data;

  return recipe;
}
renderSpinner(recipeContainer);

// showRecipe(urlapi)
const loadRecipe = () => {
  const id = location.hash.slice(1);
  showRecipe(id)
    .then(({ recipe }) => {
      //console.log(recipe);
      renderSpinner(recipeContainer);
      recipeContainer.insertAdjacentHTML('afterbegin', generateMarkup(recipe));
      // console.log(destruct);
    })
    .catch()
};
const searchHandler = () => {
  const searchQuery = document.getElementById('search_input').value;
  console.log(searchQuery);
  showresults(searchQuery)
};
const showresults = (query) => {
  fetch (`https://forkify-api.herokuapp.com/api/search?q=${query}`)
  .then((resp) => resp.json())
  .then((data) => {
    document.getElementById('result_links').innerHTML=data.recipes.map(viewresults => result_Markup(viewresults)).join('')
  }
  )
  //console.log(data.recipes));
}
window.showconsult=(recipe_id) =>{
  fetch (`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`)
  .then((resp)=>resp.json())
  .then((data)=>{
    recipeContainer.insertAdjacentHTML('afterbegin', generateMarkup(data.recipe));
    console.log(data.recipe);

  }
  )
}

const ejemplo = {
  cooking_time: 75,
  id: '5ed6604691c37cdc054bd0ec',
  image_url: 'http://forkify-api.herokuapp.com/images/pestopasta1833.jpg',
  publisher: 'The Pioneer Woman',
  servings: 4,
  source_url: 'http://thepioneerwoman.com/cooking/2013/04/pesto-pasta-salad/',
  title: 'Pesto Pasta Salad',
};
document.getElementById('result_links').innerHTML = result_Markup(ejemplo);
document.getElementById('btn_search').addEventListener('click', searchHandler);

window.addEventListener('hashchange', loadRecipe);
