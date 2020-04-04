 // set constants
const beefButton = document.getElementById('beef').addEventListener('click', getRecipes);
const chickenButton = document.getElementById('chicken').addEventListener('click', getRecipes);
const porkButton = document.getElementById('pork').addEventListener('click', getRecipes);
const lambButton = document.getElementById('lamb').addEventListener('click', getRecipes);
const seafoodButton = document.getElementById('seafood').addEventListener('click', getRecipes);
const vegetarianButton = document.getElementById('vegetarian').addEventListener('click', getRecipes);
const veganButton = document.getElementById('vegan').addEventListener('click', getRecipes);

// assign URLs to variables

const beefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const chickenURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
const porkURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork';
const lambURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb';
const seafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const vegetarianURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
const veganURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan';


// assigning event handler to beef
beefButton.addEventListener('click', () => {
  fetch(beefURL)
  .then( response => {return response.json();})
  .then( text => console.log(text))
  //.then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to chicken
chickenButton.addEventListener('click', () => {
  fetch(chickenURL)
  .then( response => {return response.json();})
  //.then( response => response.text() )
  .then( text => console.log(text))
  //.then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to pork
porkButton.addEventListener('click', () => {
  fetch(porkURL)
  .then( response => {return response;})
  .then( response => response.text() )
  .then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to lamb
lambButton.addEventListener('click', () => {
  fetch(lambURL)
  .then( response => {return response;})
  .then( response => response.text() )
  .then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to Seafood button
seafoodButton.addEventListener('click', () => {
  fetch(seafoodURL)
  .then( response => {return response;})
  .then( response => response.text() )
  .then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to Vegetarian
vegetarianButton.addEventListener('click', () => {
  fetch(vegetarianURL)
  .then( response => {return response;})
  .then( response => response.text() )
  .then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to Vegan button
veganButton.addEventListener('click', () => {
  fetch(veganURL)
  .then( response => {return response;})
  .then( response => response.text() )
  .then( text => recipeDiv.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false); 



