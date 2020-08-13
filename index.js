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