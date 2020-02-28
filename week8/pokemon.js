function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('pokemon');
const url = 'https://pokeapi.co/api/v2/pokemon/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let pokemon = data.results;
  return pokemon function(pokemon) {
    let li = createNode('li'),
        span = createNode('span');
    span.innerHTML = `${pokemon.name} ${pokemon.location_area_encounters.location_area.name}`;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
   // If there is any error you will catch them here
}); 