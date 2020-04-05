 // set constants
 const beefButton = document.getElementById('beef').addEventListener('click', getBeefRecipes);
 const chickenButton = document.getElementById('chicken').addEventListener('click', getChickenRecipes);
 const porkButton = document.getElementById('pork').addEventListener('click', getPorkRecipes);
 const lambButton = document.getElementById('lamb').addEventListener('click', getLambRecipes);
 const seafoodButton = document.getElementById('seafood').addEventListener('click', getSeafoodRecipes);
 const vegetarianButton = document.getElementById('vegetarian').addEventListener('click', getVegetarianRecipes);
 const veganButton = document.getElementById('vegan').addEventListener('click', getVeganRecipes);


 function getBeefRecipes() {
     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
     .then((res) => res.json())
     .then((menus) => {
         let output = `<h2>Beef Recipes</h2>`;
         menus = JSON.parse(JSON.stringify(menus));
         for (let i = 0; i < menus.length; i++) {
             output =+ `
                <li>${meals[i].strMeal}</li>
                <li>${meals[i].strMealThumb} + '/preview'</li>
             `;
         };
         document.getElementById('recipeDiv').innerHTML = output;
     })
 }

 function getChickenRecipes() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
    .then((res) => res.json())
    .then((menus) => {
        let output = `<h2>Chicken Recipes</h2>`;
        menus = JSON.parse(JSON.stringify(menus));
        for (let i = 0; i < menus.length; i++) {
            output =+ `
               <li>${meals[i].strMeal}</li>
               <li>${meals[i].strMealThumb} + '/preview'</li>
            `;
        };
        document.getElementById('recipeDiv').innerHTML = output;
    })
}


function getPorkRecipes() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')
    .then((res) => res.json())
    .then((menus) => {
        let output = `<h2>Pork Recipes</h2>`;
        menus = JSON.parse(JSON.stringify(menus));
        for (let i = 0; i < menus.length; i++) {
            output =+ `
               <li>${meals[i].strMeal}</li>
               <li>${meals[i].strMealThumb} + '/preview'</li>
            `;
        };
        document.getElementById('recipeDiv').innerHTML = output;
    })
}

function getLambRecipes() {
   fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb')
   .then((res) => res.json())
   .then((menus) => {
       let output = `<h2>Lamb Recipes</h2>`;
       menus = JSON.parse(JSON.stringify(menus));
       for (let i = 0; i < menus.length; i++) {
           output =+ `
              <li>${meals[i].strMeal}</li>
              <li>${meals[i].strMealThumb} + '/preview'</li>
           `;
       };
       document.getElementById('recipeDiv').innerHTML = output;
   })
}

function getSeafoodRecipes() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((menus) => {
        let output = `<h2>Seafood Recipes</h2>`;
        //menus = JSON.parse(JSON.stringify(menus));
        for (let i = 0; i < menus.length; i++) {
            output =+ `
               <li>${menus[i].meals.strMeal}</li>
               <li>${menus[i].meals.strMealThumb} + '/preview'</li>
            `;
        };
        document.getElementById('recipeDiv').innerHTML = output;
    })
}


function getVegetarianRecipes() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
    .then((res) => res.json())
    .then((menus) => {
        let output = `<h2>Vegetarian Recipes</h2>`;
        //meals = JSON.parse(JSON.stringify(meals));
        for (let i = 0; i < menus.length; i++) {
            output =+ `
               <li>${menus[i].strMeal}</li>
               <li>${menus[i].strMealThumb} + '/preview'</li>
            `;
        };
        document.getElementById('recipeDiv').innerHTML = output;
    })
}

function getVeganRecipes() {
   fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan')
   .then((res) => res.json())
   .then((menus) => {
       console.log(menus.strMeal);
       let output = `<h2>Vegan Recipes</h2>`;
       //menus = JSON.parse(JSON.stringify(menus));
       for (let i = 0; i < menus.length; i++) {
           output =+ `
              <li>${menus[i].strMeal}</li>
              <li>${menus[i].strMealThumb} + '/preview'</li>
           `;
       };
       document.getElementById('recipeDiv').innerHTML = output;
   })
}

