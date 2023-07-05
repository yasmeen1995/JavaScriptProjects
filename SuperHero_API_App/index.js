
let btnEl = document.getElementById("newHeroButton")
let heroImageEl = document.getElementById("heroImage")
let searchButtonEl = document.getElementById("searchButton")
let searchInputEl = document.getElementById("searchInput")

const Base_Url = 'https://superheroapi.com/api.php/3504664993123873'

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" height=200 width=200/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')

    heroImageEl.innerHTML = `${name}${img}${stats}`
}


const getMeHero = (id) => {
    fetch(`${Base_Url}/${id}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.powerstats)
        showHeroInfo(json) 
    })

}


const searchHero = (name) => {
    fetch(`${Base_Url}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.results[0])
        showHeroInfo(json.results[0])
    })
}

let randomHero = () => (Math.floor(Math.random()*731))

btnEl.onclick = () => getMeHero(randomHero())
searchButtonEl.onclick=() => searchHero(searchInputEl.value)

