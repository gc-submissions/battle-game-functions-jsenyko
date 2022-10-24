"use strict";

// TODO - write your code here.

let randomDamage = () => { return Math.floor(Math.random() * 10) +1 }

let chooseOption = (opt1, opt2) => {let randNum = Math.floor(Math.random() *2) == 0 ? opt1 : opt2; return randNum;}

console.log(chooseOption)

let attackPlayer = function(health) {
    return health = health - randomDamage();
}

let logHealth = (player, health) => {
console.log(`${player} health: ${health}`)
}

let logDeath = (winner, loser) => {
console.log(`${winner} defeated ${loser}`)
}

let isDead = (health) => {
    if(health <= 0)
        return true;

    else(health >= 0)
        return false;
}

function Fight(player1, player2, player1Health, player2Health) {
  
    let attacker = chooseOption (player1, player2)
  
    while(attacker = player1){
        
        player2Health = attackPlayer(player2Health) 
  }
    do{

    }

while(test)}