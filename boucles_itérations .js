/* Les boucles permettent de répéter des actions simplement et rapidement.
Voici les différentes boucles fournies par JavaScript :

BOUCLE for
BOUCLE while
BOUCLE do...while
BOUCLE for...in
BOUCLE for...of

LA BOUCLE FOR:
Une boucle for répète des instructions 
jusqu'à ce qu'une condition donnée ne soit plus vérifiée. 

for ([expressionInitiale]; [condition]; [expressionIncrément])
  instruction
*/
for (let i = 0; i < 5; i++) {
  console.log("hello world", i);
}
// if...else dans les boucles:
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
  } else if (i === 5) {
    console.log("Stop the loop");
    break;
  }
  console.log("Number " + i);
}

// BOUCLE while:
// Dans une boucle while l'expressionInitiale est déclarée
// a l''extérieur de la boucle
let i = 0;
while (i < 10) {
  console.log("Number " + i);
  i++;
}

// Exo: afficher sur la console tous les nombres impaires
// entre 1 t 20
let i = 1;
while (i <= 20) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// BOUCLE do...while (****Tres rarement utilise**)
/* « do...while » signifie « faire... tant que »). 
do
  instruction
while (condition); */
let i = 1;
do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);

// BOUCLES INFINIES
//boucle while infinie
let i = 0;
while (i < 5) {
  console.log(i);
  //++i
}
while (true) {}
// boucle do...while infinie
let x = 0;
do {
  //++x
} while (x < 5);
// boucle for infinie
for (let i = 0; i < 10; ) {}

/* BOUCLE FOR...IN
Est utilisée pour itérer sur les propriétés énumérables d'un objet.
*/
const person = {
  name: "Mass",
  age: 18,
};
// Afficher les clefs d'un objet:
for (let key in person) {
  console.log(key);
}
// Afficher les noms, valeurs des propriétés:
for (let key in person) {
  console.log(key, person[key]);
}

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};
for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};
for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

// BOUCLE FOR...OF: NOUVEAU SUR ECMASCRIPT
colors = ["blue", "green", "red"];
for (let element of colors){
  console.log(element);
}
