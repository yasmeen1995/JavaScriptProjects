let cards = []
let sum =  0

let isAlive = false
let hasBlackJack = false

let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")



let player = {
    name:  'Yasmeen',
    points : 500
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.points

function getRandomCard() {
    let result = Math.floor(Math.random()*13) + 1 
    if (result === 1){
        return 11
    } else if (result > 10 ) {
        return 10
    } else {
        return result
    }
    //Adding 1 to make the values from 1.000 to 12.9999 , random values generate from 0 to 1 (here 0.00 to 12.9999 as we multiplied with 13)
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]

    sum = cards[0] + cards[1]
    
    renderGame()
}

function renderGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }

    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent= "Cards: " //resetting the cardsEl

    for( let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
    

}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
        let thirdCart = getRandomCard()

        sum += thirdCart 
        cards.push(thirdCart)
    
        renderGame()
    }

}