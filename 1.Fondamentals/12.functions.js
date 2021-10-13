//FUNCTIONS:
/* une fonction est un « sous-programme » qui peut être appelé
une fonction est composée d'une suite d'instructions qui forment le corps de la fonction.
Il est parfois possible de passer des valeurs par défaut à une fonction et une fonction peut 
éventuellement retourner (ou renvoyer) une valeur.
En JavaScript, les fonctions sont des objets qui 
peuvent avoir des propriétés et des méthodes */

/* DÉFINIR DES FONCTION
une fonction est construite avec le mot-clé <<function>>, suivi par :
1. Le nom de la fonction,
2. Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules,
3. Les << JavaScript>> définissant la fonction, entre accolades, { }.
 */

// On définit une fonction pour la créer
// Definition de la fonction
function calc(param1, param2) {
  return param1 * param2;
}
// Appel de la fonction en passant des arguments pour l'executer
console.log(calc(2, 4));

// DECLARATION ET EXPRESSION DE FONCTION
//1. Les déclarations de fonctions
function walk() {
  console.log("walk");
}

//2. Les expressions de fonction
let val = function (val1, val2) {
  return val1 * val2;
};
console.log(val(3,6));

// ##############################################################################
// PASSER DES PARAMÈTRES PAR DÉFAUT
//1. sont tjrs les derniers paramètres
//2. Il peut etre remplace par un argument
function temp(m, k, pi=Math.PI, x=5){
  return 2*pi*Math.sqrt(m/k);
}
console.log(temp(10,5, 3));

// ##############################################################################
/* EXPRESSION DE FONCTION INVOQUE IMMÉDIATEMENT
une fonction JavaScript qui est exécutée dès qu'elle est définie. */
(function (param1, param2) {
  console.log(param1 * param2);
})(2,3);
// ##############################################################################
/* HOISTING: 
remonter, élever, hisser. 
Avant d'être exécuté, l'interpréteur va remonter 
toutes les déclarations de variables et de fonctions tout en haut.
On peut appeler une fonction avant d'être définie
Le Hoisting(Hissage) ****ne marche qu'avec les expressions de fonction:****
 */
console.log(calc(2, 10));
function calc(val1, val2) {
  return Math.pow(val1, val2);
}
// ##############################################################################
/* FONCTION FLÉCHÉE
(arrow function en anglais) 
permet d’avoir une syntaxe plus courte que les expressions de fonction
 et ne possède pas ses propres valeurs pour this, arguments, super, ou new.target. 
 Les fonctions fléchées sont souvent anonymes et ne sont pas destinées 
 à être utilisées pour déclarer des méthodes.

 règles: 
  1. Supprimer les mots clés: function & return
  2. Ajouter => entre les paramètres et le bloc
  **si un seul paramètre**
    Supprimer () 
  **si pas de paramètre**
    mettez juste () vide
  *si une seule ligne de code a executer:*
    4. enlever {}
 */

let calc = function (value) {
  console.log(value);
}
//1. Avec zero paramètres
let calc = () => console.log;
//2. Avec un seul paramètre
let calc = value => console.log(value);
//3. Avec plusieurs parametres et plusieurs declarations
let calc = (value1, value2) => {
  console.log(value1);
  console.log(value2);
}
// ##############################################################################
// L'OPÉRATEUR REST: ...args
// Permet de créer une fonction avec un nombre varie de parametres
// ...args est un array
//...args doit tjrs être le dernier paramètre
function sum(...args) {
    console.log(args);
  }
  console.log(sum(1, 2, 3, 4, 5, 6)); //Array de 6 arguments
  
  function sum(discount, ...prices) {
      const total = prices.reduce(a,b) => a + b;
      return total*(1-discount);
  }
  
  console.log(sum(0.1, 20, 30, 1));

/* MUTATEUR(SETTER) & ACCESSEURS (GETTERS)
En JavaScript, un mutateur (ou setter en anglais) peut être utiisé
afin d'exécuter une fonction à chaque fois qu'on souhaite modifier la valeur d'une propriété donnée. 
La plupart du temps, les mutateurs sont utilisés avec les accesseurs (getters) 
afin de créer une pseudo-propriété. */

// L'opérateur setter:
const person = {
  firstName: "Sedin",
  lastNAme: "Mass",
};

//Affiche le nom complet de la personne: template literal
console.log(`${person.firstName} ${person.lastNAme}`);
// Si nous devons afficher ce nom a plusieurs endroits dans le programme,
// Meuilleure solution
const person = {
  firstName: "Sedin",
  lastNAme: "Mass",
  //Vielle méthode
  fullName: function () {},
  // Meilleure méthode
  fullName() {
    return `${person.firstName} ${person.lastNAme}`;
  },
};
console.log(person.fullName());
// problem_1: person.fulName ne peut être modifie depuis l'exterieur
// Solution: Getters => accedes aux propriétés
// problem_2: person.full nécessite tjrs ().
// Solution: setters => Changer(muter) les propriétés

const person = {
  firstName: "Sedin",
  lastNAme: "Mass",
  // get pour getter
  get fullName() {
    return `${person.firstName} ${person.lastNAme}`;
  },
  //setter
  set fullName(value) {
    const part = value.split(" ");
    this.firstName = part[0];
    this.lastNAme = parts[1];
  },
};
//Getter:
console.log(person.fullName);
//setter
person.fullName = "John Smith";

//TRY AND CATCH(defensive programming) */