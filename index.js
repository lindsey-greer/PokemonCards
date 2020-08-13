let pokeContainer = document.querySelector('.pokeContainer')
let viewButton = document.querySelector('#viewButton')
viewButton.addEventListener('click',() => {
    loadPokemon()
})

let addButton = document.querySelector('#addButton')
addButton.addEventListener('click', ()=>{
    addPokemon()
})

