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

function createNode(element){
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

// assigning event handler to beef
beefButton.addEventListener('click', () => {
    fetch(beefURL)
    .then((resp) => resp.json())
    .then(function(meals){
        let recipeDiv = meals.results;
        return recipeDiv.map(function(menu) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = menu.mealThumb;
            span.innerHTML = `{$meal.strMeal}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function (err) {
      console.log(JSON.stringify(err));
    })
});
