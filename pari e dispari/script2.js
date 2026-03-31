'use strict'

const userNumber = prompt('Inserisci un numero da 1 a 5');
console.log(userNumber);

function cpuRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cpuNumber = cpuRandomNumber(1, 5);
console.log(cpuNumber);

const sumNumber = parseInt(userNumber) + cpuNumber;
console.log(sumNumber);

function pariODispari(numero) {
    if (numero % 2 === 0) {
        console.log('pari');
    } else {
        console.log('dispari');
    }
}

pariODispari(sumNumber);

