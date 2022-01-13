/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro
*/

const list1 = [12, 24, 8, 90, 6, 18, 23];
const list2 = [45, 60, 2];

console.log(`List1`, list1);
console.log(`List2`, list2);


while (list1.length !== list2.length) {
   let number = Math.floor(Math.random() * 100) + 1;

   if(list1.length > list2.length){
      
      list2.push(number);
   } else if (list1.length < list2.length){
      
      list1.push(number);
   } else {
      console.log(`List1`, list1);
      console.log(`List2`, list2);
   }
   
};

console.log(`List1`, list1);
console.log(`List2`, list2);