//  PRIMITIVES
//  String
//  Number
//  Boolean
//  Undefined
//  Null

let name = "mass"; //String literal
let ag = 30; //Number literal
let isApproved = false; //Boolean literal
let isNotApproved = false; //Boolean literal
let firstChoice = undefined;
let selectedColor = null;
// Nous utilisons des variables pour stocker temporairement des données
// Nou declarons une variables avec let ou cons

//Ne peut pas être un mot-clé réservé
//doit être significatif
//ne peut pas commencer par un nombre
//ne peut pas contenir d'espace ou de tiret
//Sont sensibles à la casse
let firstName;
let FirstName;

// variable non definie
let lastName;
console.log(lastName); //Par defaut une variable est indefinie

// Affecter une valeur a une variable
let name = "Bienvnu";
let age = 28;

//Initialiser plusieurs variable non definie
let familyName, pseudoName;
let familyName = "mass",
  pseudoName;
let familyName = "mass",
  pseudoName = "Sedin";

//Une variable definie avec let peut etre reaffecte
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//CONST, ne peut etre change
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate); // genere une erreure
