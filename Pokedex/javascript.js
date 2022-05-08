document.querySelector('.search').addEventListener('click', getPoke)

function getPoke(){
    let name = document.querySelector('.poke-search').value.toLowerCase() // accept any case of words, like cHaRmANdEr

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    document.querySelector('.poke-name').innerText = data.name.toUpperCase() // fill in Pokemon name
    document.querySelector('.poke-name2').innerText = data.name.toUpperCase() // fill in Pokemon name
    document.querySelector('.poke-type').innerText = data.types[0].type.name.toUpperCase() // insert type
    document.querySelector('.move1').innerText = data.moves[0].move.name.toUpperCase() // insert move 1
    document.querySelector('.move2').innerText = data.moves[1].move.name.toUpperCase() // insert move 2
    document.querySelector('.move3').innerText = data.moves[2].move.name.toUpperCase() // insert move 3
    document.querySelector('.move4').innerText = data.moves[3].move.name.toUpperCase() // insert move 4
    document.querySelector('.weight').innerText = data.weight // insert pokemon weight
    document.querySelector('.height').innerText = data.height // insert pokemon height
    document.querySelector('.health').innerText = data.stats[0].base_stat // insert pokemon HP
    document.querySelector('img').src = data.sprites.front_default // insert pokemon image
    document.querySelector('#poke-no').innerText = `No. ${data.id}` // insert number of Pokemon under the name
  })
    .catch(err => {
    console.log(`error ${err}`)
});
}

//This will make the pokemon Shiny when you click the button
document.querySelector('.shiny').addEventListener('click', makeShiny)

function makeShiny(){
  let name = document.querySelector('.poke-search').value.toLowerCase() // accept any case of words, like cHaRmANdEr

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
  console.log(data.sprites.front_shiny)
  console.log(document.querySelector('.poke-search').value.toLowerCase())
  document.querySelector('img').src = data.sprites.front_shiny
})
  .catch(err => {
  console.log(`error ${err}`)
});
}
