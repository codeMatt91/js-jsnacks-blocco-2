/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo

*/

const writeDisplay = document.getElementById('display');

// let number = parseInt(prompt('Inserisci un numero'));

// let message = `Il numero inserito è`;

// if(number % 2 === 0){
//    writeDisplay.innerText = message, `${number} ed è positivo`
// } else {
//    let positiveNumber = number + 1;
//    writeDisplay.innerText = message + ` ${number} ma aggiungendo 1 diventa ${positiveNumber} ed è positivo`;
// }



// * ESERCIZIO INVENTATO PER ESERCITARMI SUI FLAG: CHIEDO ALL'UTENTE IL NUMERO FINCHè NON NE INSERISCE UNO POSITIVO
// console.log('JS OK!');

// const writeDisplay = document.getElementById('display');

// let number;

// let isAllowed = false;
// let i = 0

// do {
//    number = parseInt(prompt('Inserisci un numero'));

//    if (number % 2 !== 0) {
//       alert('numero non valido, inseriscilo di nuovo');
//    }else {
//       isAllowed = true;
//       console.log(number);
//    }
// }while (isAllowed !== true);

// writeDisplay.innerHTML = `il numero ${number} è pari: DAJE!`;


let askNumber = parseInt(prompt('inserisci un numero'));

while (askNumber % 2) {
   askNumber += 1;
}

console.log(askNumber);
writeDisplay.innerText = `Il numero scelto positivo è: ${askNumber}`;