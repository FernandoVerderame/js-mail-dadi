// ! ESERCIZIO 1 - GIOCO DEI DADI

// Prendiamo gli elementi dall HTML
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const result = document.getElementById('result');

// Generiamo 2 numeri casuali da 1 a 6
const numberPlayerOne = Math.floor(Math.random() * 6) + 1;
const numberPlayerTwo = Math.floor(Math.random() * 6) + 1;

let message = '';

// Confrontiamoli tra di loro per stabilire chi fa il punteggio più alto
if (numberPlayerOne === numberPlayerTwo) {
    message += 'La partita finisce in parità!'
} else if (numberPlayerOne > numberPlayerTwo) {
    message += 'Il player uno è il vincitore!'
} else {
    message += 'Il player due è il vincitore!'
}

// Stampiamo in pagina i due tiri
playerOne.innerHTML = `Il numero del player 1 è: <strong>${numberPlayerOne}</strong>`;
playerTwo.innerHTML = `Il numero del player 1 è: <strong>${numberPlayerTwo}</strong>`;

// Stampiamo in pagina il risultato
result.innerText = message;







// ! ESERCIZIO 2 - FINTA LOGIN

// Prendiamo gli elementi dall HTML 
const email = document.getElementById('email');
const button = document.getElementById('button');
const check = document.getElementById('check');
