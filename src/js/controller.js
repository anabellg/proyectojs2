import generateMarkup from "./markup";
import renderSpinner from './renderSpinner'

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
const urlapi = "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"

// La función que pide el PDF es similar a la siguiente
async function showRecipe(api_url) {
  // Inciso 23 (d) - Mostrar el spinner antes de cargar el contenido
  renderSpinner(recipeContainer)
  return await fetch(api_url)
    .then((response) => response.ok ? response.json() : Promise.reject(response.statusText))
    // Inciso J
    .then(response => response.status === 'success' ? response.data : Promise.reject(response))
    // Inciso D
    .catch((error) => error)
}

// Una alternativa puede ser la siguiente:
const showRecipe2 = (api_url) => fetch(api_url)
  .then((response) => response.ok ? response.json() : Promise.reject(response.statusText))
  // Inciso J
  .then(response => response.status === 'success' ? response.data : Promise.reject(response))
  // Inciso D
  .catch((error) => error)
//#endregion / Avance de proyecto 1. Inciso 15

showRecipe(urlapi).then(({recipe}) => {
  recipeContainer.innerHTML = generateMarkup(recipe)
  console.log('response', recipe);
})

