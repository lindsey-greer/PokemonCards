let pokeContainer = document.querySelector('.pokeContainer')
let viewButton = document.querySelector('#viewButton')
viewButton.addEventListener('click',() => {
    loadPokemon()
})

let addButton = document.querySelector('#addButton')
addButton.addEventListener('click', ()=>{
    addPokemon()
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

function loadPokemon() {
    getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then(
        (data) => {
            for (const pokemon of data.results) {
                getAPIData(pokemon.url).then(
                    (pokeData) => {
                        populatePokeCard(pokeData)
                    }
                )
            }
        }
    )
}

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.creatElement('div')
    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped');
    })
    let pokeFront = populateCardFront(singlePokemon)
    let pokeBack = populateCardBack(singlePokemon)

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeContainer.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card_face card_face--front'

    let frontImage = document.createElement('img')
frontImager.src = `../images/${getImageFileName(pokemon)}.png`
let frontLabel = document.createElement('p')
frontLabel.textContent = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.
    slice(1)}`
cardFront.appendChild(frontImage)
cardFront.appendChild(frontLabel)
return cardFront
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } else return `pokeball`
}

function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    let abilityList = document.createElement('ul')
    abilityList.textContent = 'Abilities:'
    pokemon.abilities.forEach(ability => {
        let abilityName = document.createElement('li')
        abilityName.textContent = ability.ability.name
        abilityList.appendChild(abilityName)
    })
    let moveList = document.createElement('p')
    moveList.textContent = (`Level 0 Moves: ${getPokemonMoves(pokemon, 0).length}`)
    cardBack.appendChild(abilityList)
    cardBack.appendChild(moveList)
    return cardBack
}
