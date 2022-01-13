/*

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while


*/

// const writeDisplay = document.getElementById('display');

// let number;
// let sum = 0;

// for(let i = 0; i < 5; i++) {

//    number = parseInt(prompt('Inserisci un numero'));
//    console.log(number);
//    sum += number;
// }

// console.log(sum);
// writeDisplay.innerHTML = `La somma dei numeri inseriti è; <p>${sum}</p>`;

//* ISTREUZIONI PER IL WHILE 

const writeDisplay = document.getElementById('display');

let list = [];
let number;
let sum = 0;


let i = 0;
while(list.length < 5) {
   number = parseInt(prompt('Inserisci un numero'));
   list.push(number);
   console.log(list);
   sum += number;
   i++;
}

console.log(sum);
writeDisplay.innerHTML = `La somma dei numeri inseriti è; <p>${sum}</p>`;