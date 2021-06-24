var readlineSync = require("readline-sync");

var playerName= readlineSync.question("What is your name: ");

console.log(`Hii ${playerName}! let's play the game!`);

console.log("choose any move in this option! rock paper scissors");

var playerChoice = readlineSync.question("Which move you want to choose ? ");

console.log("user choice:-",playerChoice);

var optionList = ['rock', 'paper', 'scissors'];

var computerRandomChoice = optionList[Math.floor(Math.random() *optionList.length)];

console.log("computer choice:-",computerRandomChoice);

if (playerChoice == "paper" && computerRandomChoice == "rock"){
    console.log(playerChoice,"is won tha game");

}else if(playerChoice == "paper" && computerRandomChoice == "scissors"){
    console.log(computerRandomChoice,"is won the game");

}else if (playerChoice == "scissors" && computerRandomChoice == "paper"){
    console.log(playerChoice,"is won the game");
    
}else if (playerChoice == "scissors" && computerRandomChoice == "rock"){
    console.log(computerRandomChoice,"is won the game");

}else if (playerChoice == "rock" && computerRandomChoice == "scissors"){
    console.log(playerChoice,"is won the game");

}else if (playerChoice == "rock" && computerRandomChoice == "paper"){
    console.log(computerRandomChoice,"is won the game")
    
}else if (playerChoice == computerRandomChoice){
    console.log("drwo the game")
}