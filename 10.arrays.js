//Creation des Arrays
//Methode 1
const numbers2 = new Array(22, 45, 33, 76, 54);
//Methode 2
const numbers = [43, 56, 33, 23, 44, 36, 5];
console.log(typeof numbers2);

//Les arrays peuvent contenir un melanges de donnees
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];
// console.log(mixed);

// les propriétés
// Longueur d'un array (length): nombre d'elment dans cet array
console.log(numbers.length);
//Connaitre si un objet est un array:
// console.log(Array.isArray(numbers));
//obtenir une valeur
// console.log(numbers[0]);

// insertion d'une valeur dans array:
numbers[2] = 100; //100 swera le troisime element dans l'array
// console.log(numbers);

// Connaitre l'index a partir de la valeur
console.log(numbers.indexOf(36));

// *******************************
//Mutation d'un array:
//Ajout a la fin d'une array:
numbers.push(250);
//Ajout devant un array:
numbers.unshift(120);
//Supremer le dernier nombre:
numbers.pop();
//supprimer le premier numbre
numbers.shift();
// Inverser
numbers.reverse();
//suppression d'un segment de nombres
numbers.splice(1, 3);

// Concatenation des arrays:
console.log(numbers.concat(numbers2));

// Sorting = triage croissant de valeurs string
const fruit = ["pear", "Apple", "orange", "Banana"];
// console.log(fruit.sort());
//triage décroissant
// console.log(fruit.sort().reverse());

//Sorting numbers croissant
// let myNumbers = new Array(43, 56, 33, 23, 44, 36, 5);
// val = myNumbers.sort(function (x, y) {
//   return x-y;
// });
//Sorting numbers decroissant
let myNumbers = new Array(43, 56, 33, 23, 44, 36, 5);
val = myNumbers.sort(function (x, y) {
  return y - x;
});
console.log(val);
