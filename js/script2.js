/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo

*/


console.log('JS OK!');

const writeDisplay = document.getElementById('display');

let number;

let isAllowed = false;
let i = 0

do {
   number = parseInt(prompt('Inserisci un numero'));

   if (number % 2 !== 0) {
      alert('numero non valido, inseriscilo di nuovo');
      isAllowed;
   }else {
      isAllowed = true;
      console.log(number);
   }
}while (isAllowed !== true);

writeDisplay.innerHTML = `il numero ${number} è pari: DAJE!`;