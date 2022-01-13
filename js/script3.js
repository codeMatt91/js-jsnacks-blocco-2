/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

1- creo una lista di nomi 
2- creo un a lista di cognomi
3- genero una falsa lista di coppie nome-cognome
*/

const writeDisplay = document.getElementById('display');

const nomi = ['matteo', 'giovanni', 'marco', 'luca', 'anna', 'antonio'];
const cognomi = ['bigotti', 'rossi', 'verdi', 'neri'];

let fakeList = [];

let i = 0;
while (fakeList.length < 3) {

   const randomName = Math.floor(Math.random() * nomi.length);
   const randomSurname = Math.floor(Math.random() * cognomi.length);

   const name = nomi[randomName];
   const surname = cognomi[randomSurname];

   let fakeGuess = `${name} ${surname}`;
   

   fakeList.push(fakeGuess);

};

console.log(fakeList);
writeDisplay.innerText = fakeList;