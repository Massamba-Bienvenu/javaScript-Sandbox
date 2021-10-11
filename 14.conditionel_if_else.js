/* 
Prendre des décisions dans le code — conditions
Il y'a deux types instructions conditionnelles:
1. Instruction if ... else
2. Instruction switch ... case
 */

// IF ... ELSE
// if (condition) {
//     instructions1
//   } else {
//     instructions2
//   }

const id = 100;
// ÉGAL À
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// PAS ÉGAL À
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// ÉGAL À VALEUR et TYPE
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// ÉGAL À VALEUR et TYPE
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Tester si non défini
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log("NO ID");
}

// PLUS OU MOINS QUE
if (id <= 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// IF ELSE
/* if (condition1)
  instruction1
else if (condition2)
  instruction2
else if (condition3)
  instruction3
...
else
  instruction */

const color = "yellow";
if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

// OPÉRATEURS LOGIQUES
// OU ||
const jour = "blabla";

if (
  jour === "lundi" ||
  jour === "mardi" ||
  jour === "mercredi" ||
  jour === "jeudi" ||
  jour === "vendredi"
) {
  console.log(`Aujourdhui c'est ${jour}`);
} else if (jour === "samedi" || jour === "dimanche") {
  console.log(`Aujourdhui c'est le repos`);
} else {
  console.log(`Saisissez un jour de la semaine!!`);
}

// ET &&
const name = "Steve";
const age = 70;
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OU ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// OPÉRATEUR TERNAIRE
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// SANS LES ACCOLADES
if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");

if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");
