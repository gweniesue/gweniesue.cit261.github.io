 // set constants
 const beefButton = document.getElementById('beef');
 const chickenButton = document.getElementById('chicken')
 const porkButton = document.getElementById('pork');
 const lambButton = document.getElementById('lamb');
 const seafoodButton = document.getElementById('seafood');
 const vegetarianButton = document.getElementById('vegetarian');
 const veganButton = document.getElementById('vegan');

 // assign URLs to variables

const beefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const chickenURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
const porkURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork';
const lambURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb';
const seafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const vegetarianURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
const veganURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan';

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
 .then(response => response.json())
 .then(recipeList => {
    recipeList.meals.forEach(
        meal => {
            console.log(meal.strMealThumb);
            let anchor = document.createElement('a');
            anchor.setAttribute('href', meal.strMealThumb);
            anchor.innerHTML = recipeList.strMeal;
            document.querySelector('#recipeDiv').appendChild(anchor);
            document.querySelector('#recipeDiv').innerHTML += ' ';
        }
    )
 })
