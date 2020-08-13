let pokeContainer = document.querySelector('.pokeContainer')
let viewButton = document.querySelector('#viewButton')
viewButton.addEventListener('click',() =>) {
    loadPage()
})

let addButton = document.querySelector('#addButton')
addButton.addEventListener('click', () => ) {
    addPokemon ()
})

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}

function loadPage() {
    getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then(
        (data) => {
            for (const pokemon of data.results) {
                getAPIData(pokemon.url).then(
                    (pokedata) => {
                        populatePokeCard(pokeDate)
                    }
                )
            }
        }
    )
}

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', function() {
        pokeCard.classList.toggle('is-flipped');
    })
}