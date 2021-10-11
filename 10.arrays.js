//CREATION DES ARRAYS
//Methode 1
let numbers = new Array(22, 45, 33, 76, 54);
//Methode 2
numbers = [43, 56, 33, 23, 44, 36, 5];
console.log(typeof numbers);

//Les arrays peuvent contenir un melanges de donnees
let mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];
console.log(mixed);

// LES PROPRIÉTÉS
// .length: nombre total d'éléments dans cet array
numbers = [43, 56, 33, 23, 44, 36, 4, 8, 5];
console.log(numbers.length);

//Array.isArray(): Connaître si un objet est un array:
console.log(Array.isArray(numbers)); //True or false

//obtenir un element a partir de son index
numbers = numbers[0]; // obtiens element a l'index 0
console.log(numbers);

//Obtenir l'index a partir de l''element
console.log(numbers.indexOf(36));

// AJOUTER DES ELEMENTS A UN ARRAY
//1. a la fin:
numbers.push(5, 6);
//2. au debut
numbers.unshift(1, 2);

// SUPPRIMER DES ELEMENTS DANS UN ARRAY
//1. a la fin:
numbers.pop();
//2. au debut
numbers.shift();

// EXCLURE D'ELEMENTS AVEC .splice();
let array = ["a", "b", "c", "d", "e", "f", "g"];
let splice;

// 1. .splice() pour extraire des elements d'un array
// .splice(indexDeDepart, nombre_elements_supprime)
splice = array.splice(0, 2); // Retourne les elements supprimes dans un array
console.log(array, splice);

//2. utilisation de .splice() pour ajouter des elements dans array:
// .splice(indexDeDepart, nombre_elements_supprime=0, éléments_a_ajouter)
let numbers;
let numbers2;
numbers = [1, 2, 3, 4]; // Array d'origine avec les elements ajoutes
numbers2 = numbers.splice(2, 0, "a"); // Array des elements supprime
console.log(numbers, numbers2.length);

// EXTRAIRE DES ELEMENTS DANS UN ARRAY
let third = [2, 6, 3, 8, 9, 4, 5];
// third = third.slice(2); //inclut tous les éléments  a partir de l''index 2
third = third.slice(1, 4); // Inclus les element en partant de l''index 1 a l''index 3
console.log(third);

// CLONER OU COPIER TOUS LES ELEMENTS D"UN ARRAY
let numbers = [3, 4, 3, 6, 8, 9, 4];
//1. methode1
// let copy = numbers;
//2. methods //*****RECOMMANDÉ*****
// let copy = [...numbers];
//3. avec slice
let copy = numbers.slice();
console.log(copy);

// .join(): Convertir un array en string
//tres utile pour les slug
//Un slug n’est rien d’autre que la partie de l’URL d’un site Web qui
//permet d’identifier une page spécifique et qui doit être très facile à lire.
//https://www.agence-churchill.fr/blog/convertir-leads/

let array = ["convertir", "leads"];
//.join() : converti en string avec séparateur une virgule
let joined = array.join("-");
//.join("-ou,ou..."): converti en string et ajoute le séparateur spécifié entre les string
console.log(array, joined, typeof joined);

// VIDER UN ARRAY
let numbers = [3, 4, 3, 6, 8, 9, 4];
//1. Le réassigner aun array vide
numbers = [];
number = new Array();
//2. Définir length = 0
numbers.length = 0;
//3. Utiliser la méthode splice()
numbers.splice(0, numbers.length);

// COMBINAISON DES ARRAYS
//1. Utiliser la méthode concat
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = first.concat(second);
//2. Utiliser l'opérateur spread
let combined = [...first, "a", ...second, "b"];

// Remplacer une valeur en utilisant son index:
numbers[2] = 100; //100 sera le troisième element dans l'array
// console.log(numbers);

// Sorting = triage croissant de valeurs string
const fruit = ["pear", "Apple", "orange", "Banana"];
// console.log(fruit.sort());
// triage décroissant
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

//TESTER LES ELEMENTS D"UN ARRAY
// verifier si tous les nombres sont positifs
let numbers = [1, 2, 5, 6, 4];
let allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive); //true

//verifier s'il ya au moins un nombre négatif
let numbers = [1, 2, 5, -6, 4];
let atLeastOneNegative = numbers.some(function (value) {
  return value <= 0;
});
console.log(atLestOneNegative); //true

// FILTRER LES ARRAYS
let numbers = [1, 2, 5, -6, 4];
// retourne juste les nombre positifs
let filtered = numbers.filter(function (value) {
  return value >= 0;
});
console.log(filtered);

// LA MÉTHODE MAP (retourne un nouvel array)
let numbers = [1, 2, 5, -6, 4];
let mappedNumbers = numbers.map(function (value) {
  return value * 2;
});
console.log(mappedNumbers);

// LA MÉTHODE REDUCE
let numbers = [1, 2, 5, 8, 4];
//Calculer la somme total
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);
// TROUVER DES ELEMENTS PRIMITIFS DANS UN ARRAY
//1. Trouver si un element existe dans un array
console.log(numbers.includes(3)); //True or False (meilleure)
//2. L'index d''un element
console.log(numbers.indexOf(3)); // donne l'index de 5
//3. l'index du dernier element similaire
console.log(numbers.lastIndexOf(3));

//TROUVER DES ELEMENTS DE REFERENCE DANS UN ARRAY
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//Utiliser la méthode find() pour les references dans les arrays
// Trouver si nous avons un course avec pour name"a":
const course = courses.find(function (course) {
  return course.name === "a";
});
//Trouver l'index d'une reference dans un array
const course = courses.findIndex(function (course) {
  return course.name === "a";
});

//.forEach()
let numbers = [5, 7, 9, 3, 6, 2];
//1.
numbers.forEach(function (number) {
  console.log(number);
});
//2.
numbers.forEach((number, index) => console.log(number, index));
