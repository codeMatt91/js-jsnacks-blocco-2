/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari

1- Crea un array di numeri

*/

const listNumber = [2, 45, 67, 7, 34, 78, 23];

let sum = 0;

for(let i = 0; i < listNumber.length; i++){

   listNumber[i];
   if (listNumber[i] % 2 !== 0) {
      let number = listNumber[i];
      sum += number;
      console.log(sum);
   }
}

console.log(sum);