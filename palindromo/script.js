'use strict';

// Obiettivo:
// Dobbiamo capire se una parola è un palindromo o no utilizzando le funzioni

// Passi:
// 1. Chiedere la parola all'utente (prompt)
// 2. Controllare che la stringa passata non sia vuota
// 3. Controllare che la parola sia un palindromo o no

// ================================================================================
// MAIN
// ================================================================================

// Chiedo la parola all'utente
const parolaInserita = prompt('Inserisci un possibile palindromo');

// Controllo che la stringa non sia vuota
if (parolaInserita === '') {
    console.error('Hai inserito una stringa vuota');
}

// Dichiarazione di funzione
function palindromo(parola) {
    // Rivoltare la parola inserita dall'utente (creando una nuova stringa)
    let parolaRivoltata = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        // Assegno a carattere il carattere i-esimo partendo dal fondo
        const carattere = parola.charAt(i);
        parolaRivoltata += carattere;
    }

    // Controllo se la parola rivoltata è uguale alla parola non rivoltata
    // Allora è un palindromo
    if (parola === parolaRivoltata) {
        console.log('Palindromo')
    } else {
        console.log('Non hai inserito un palindromo');
    }
}

// Invocare la funzione
palindromo(parolaInserita);