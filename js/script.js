// Generiamo 2 numeri casuali da 1 a 6
const playerOne = Math.floor(Math.random() * 6) + 1;
const playerTwo = Math.floor(Math.random() * 6) + 1;
console.log(playerOne, playerTwo);


let message = '';

// Confrontiamoli tra di loro per stabilire chi fa il punteggio più alto
if (playerOne === playerTwo) {
    message += 'La partita finisce in parità!'
} else if (playerOne > playerTwo) {
    message += 'Il player uno è il vincitore!'
} else {
    message += 'Il player due è il vincitore!'
}