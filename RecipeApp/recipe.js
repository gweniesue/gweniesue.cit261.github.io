// set constants
const beefButton = document.getElementById('beef');
const chickenButton = document.getElementById('chicken')
const porkButton = document.getElementById('pork');
const lambButton = document.getElementById('lamb');
const seafoodButton = document.getElementById('seafood');
const vegetarianButton = document.getElementById('vegetarian');
const veganButton = document.getElementById('vegan');
const recipe = document.getElementById('recipeDiv');

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
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
  console.log(beefURL);
}, false);

// assigning event handler to chicken
chickenButton.addEventListener('click', () => {
  fetch(chickenURL)
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to pork
porkButton.addEventListener('click', () => {
  fetch(porkURL)
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to lamb
lambButton.addEventListener('click', () => {
  fetch(lambURL)
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to Seafood button
seafoodButton.addEventListener('click', () => {
  fetch(seafoodURL)
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to Vegetarian
vegetarianButton.addEventListener('click', () => {
  fetch(vegetarianURL)
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);

// assigning event handler to Vegan button
veganButton.addEventListener('click', () => {
  fetch(veganURL)
  .then( response => {
    recipe.innerHTML = 'Waiting for response...';
  if (response.ok) {
      return response;
  }
      throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => recipe.innerText = text )
  .catch( error => console.log('there was an error:', error))
}, false);