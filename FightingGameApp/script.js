
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
let p1NameDiv = document.getElementById("p1Name")
let p2NameDiv = document.getElementById("p2Name")

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1,p2,p1HealthDiv,p2HealthDiv, gameState) => {
  // Update the DOM with the latest health of players
//   console.log('yashhhhhh: ', p1.name)
  p1NameDiv.innerText = p1.name
  p2NameDiv.innerText = p2.name

  p1HealthDiv.innerText = p1.health
  p2HealthDiv.innerText = p2.health
  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver
    result.innerText = game.declareWinner(game.isOver,p1,p2)
    return gameState
  } 
}

class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
  strike (player, enemy, attackDmg) {
    let damageAmount = Math.ceil(Math.random() * attackDmg) 
    enemy.health -= damageAmount

    updateGame(p1,p2,p1HealthDiv,p2HealthDiv,gameState)
    
    return `${player.name} attacks ${enemy.name} for ${damageAmount}` 
  }
  // ** Heal the player for random number from  1 to 5 **
  heal (player) {
    let hpAmount = Math.ceil(Math.random() * 5)
    player.health += hpAmount

    updateGame(p1,p2,p1HealthDiv,p2HealthDiv,gameState)
    return `${player.name} heals for ${hpAmount} + HP!`
  }
}

// ** Create the Game class with all it's attributes and methods to run a match **
class Game {
  constructor(p1HealthDiv,p2HealthDiv) {
    this.isOver = false;
    this.p1HealthDiv = p1HealthDiv
    this.p2HealthDiv = p2HealthDiv
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner(isOver,p1, p2) {
    let message
    if (isOver == true && p1.health <= 0) {
      message = `${p2.name} WINS!`;
    } 
    else if(isOver == true && p2.health <= 0) {
      message = `${p1.name} WINS!`
    } 
    console.log(isOver,message, p2.health, p1.health)
    return message
  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1,p2) {
    p1.health = 100
    p2.health = 100
    this.isOver = false
    resultDiv.innerText = ''
    updateGame(p1,p2,p1HealthDiv,p2HealthDiv)
  }
  
  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    this.reset(p1,p2);
    // Make sure the players take turns untill isOver is TRUE
    while (!this.isOver) {
      p1.strike(p1,p2, p1.attackDmg)
      p2.heal(p2)
      p2.strike(p2,p1, p2.attackDmg);
      p1.heal(p1)
      updateGame(p1,p2,p1HealthDiv,p2HealthDiv);
    }
    // Once isOver is TRUE run the declareWinner() method 
    return this.declareWinner(this.isOver,player1,player2);
  }

}

// ** Create 2 players using the player class **
let player1 = new Player('Yasmeen', 100, 15)
let player2 = new Player('Shahid', 100, 15)

// ** Saving original Player Data **
let p1 = player1
let p2 = player2

// ** Create the game object from the Game class **
let game = new Game(p1HealthDiv,p2HealthDiv);

// ** Saving original Game Data **
let gameState = game.isOver


// ** Adding a click listener to the simulate button that runs the play() method on click and pass in the players **
play.onclick = () => result.innerText = game.play(player1,player2);

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  if (e.key == "q" && player2.health > 0 ){
    player1.strike(player1, player2, player1.attackDmg)
    document.getElementById('p1attack').play();
    console.log('inside 1st if Yashhh')
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "a" && player2.health > 0 ){
   player1.heal(player1)
   document.getElementById('p1heal').play();
  }
});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {
  if (e.key == "p" && player1.health > 0){
    player2.strike(player2, player1, player2.attackDmg)
    document.getElementById('p2attack').play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "l" && player2.health > 0 ){
   player2.heal(player2)
  document.getElementById('p2heal').play();
  }
});



