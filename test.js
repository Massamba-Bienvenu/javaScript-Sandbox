let numbers = [3, 4, 3, 6, 8, 9, 4];



//TRIER DES ARRAYS
//1. Trier par ordre croissant
let numbers = [1, 2, 5, 6, 4];
numbers.sort();
console.log(numbers);

//2. Inverser
let numbers = [1, 2, 5, 6, 4];
numbers.reverse();
console.log(numbers);

//TESTER LES ELEMENTS D"UN ARRAY
// verifier si tous les nombres sont positifs
let numbers = [1, 2, 5, 6, 4];
let allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive); //true
//verifier s'il ya au moins un nombre négatif
let numbers = [1, 2, 5, -6, 4];
let atLestOneNegative = numbers.some(function (value) {
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
console.log(numbers.indexOf(3) !== -1); //True or false
console.log(numbers.includes(3)); //True or False (meilleure)
//2. L'index d''un element
console.log(numbers.indexOf(5)); // donne l'index de 5
console.log(numbers.indexOf("5")); //?
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
const course = courses.find(function (course) {
  return course.name === "xyz";
}); //?
//Trouver l'index d'une reference dans un array
const course = courses.findIndex(function (course) {
  return course.name === "a";
});
const course = courses.findIndex(function (course) {
  return course.name === "xyz";
});

// ITÉRER SUR UN ARRAY
let numbers = [5, 7, 9, 3, 6, 2];
//1.
numbers.forEach(function (number) {
  console.log(number);
});
//2.
numbers.forEach((number, index) => console.log(number, index));
