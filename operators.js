// OPERATORS
// Les opérateurs sont des symboles qui permettent de manipuler des variables,
// c'est-à-dire effectuer des opérations, les évaluer, ...
// les opérateurs sont utilises sur les variables pour créer des expressions
// les expressions a leur tour servent a créer les algorithmes
// On distingue plusieurs types d'opérateurs :

// les opérateurs bit-à-bit

// les opérateurs de rotation de bit
// les opérateurs de manipulation de chaînes de caractères

// les opérateurs de calcul
let x = 10;
let y = 3;
console.log(x + y); // Addition
console.log(x - y); // Soustraction
console.log(x * y); // Multiplication
console.log(x ** y); // Puissance
console.log(x / y); // Division
console.log(x % y); // opérateur modulo	Retourne le reste de la division

// Les opérateurs d'incrémentation
//1. 	Incrémentation :Augmente d'une unité la variable(x++)
console.log(++x);
//2.    Décrémentation :Diminue d'une unité la variable(x--)
console.log(--x);

// les opérateurs d'affectation
let x = 10;
console.log((x = x++)); //ajoute 1 a x ou (x=x+1);
console.log((x += 5)); //ajoute 5 a x ou (x=x+5) ;
console.log((x *= 5)); //multiplie x par 3 ou (x=x*3);
console.log((x /= 5)); //divise x par 5 ou (x=x/5);
console.log((x **= 5)); //x a la puissance 5 ou (x=x**5);
console.log((x %= 5)); // le reste de(x/5)

// les opérateurs de comparaison
let x = 1;
//1.opérateurs relationnels
console.log(x > 0); //Vérifie que x strictement supérieure à 0 puis retourne true ou false;
console.log(x >= 1); //Vérifie que x est supérieure ou égale 1 puis retourne true ou false;
console.log(x < 1); //Vérifie que x strictement inférieur à 1 puis retourne true ou false;
console.log(x <= 1); //Vérifie que x est inférieur ou égale 1 puis retourne true ou false;
//2.1 opérateurs de qualité strict
console.log(x === 1); //opérateur d'identité: Vérifie l'identité de valeur et de type de x et 1 puis retour true ou false
console.log(String(x) === 1); //opérateur d'identité: Vérifie l'identité de valeur et de type de x et 1 puis retour true ou false
console.log(String(x) === "1"); //opérateur d'identité: Vérifie l'identité de valeur et de type de x et 1 puis retour true ou false
console.log(x.toString() !== 1); //opérateur de non identité:Vérifie si  X et 1 n'ont pas la même valeur ou bien sont de types différents.
console.log(x.toString() !== "1"); //opérateur de non identité:Vérifie si  X et 1 n'ont pas la même valeur ou bien sont de types différents.
//2.2 opérateurs de qualité flexible
console.log(x == 1); // opérateur d'égalité: Compare deux valeurs x et 1, vérifie leur égalité puis retour true ou false
console.log(String(x) == 1); // opérateur d'égalité: Compare deux valeurs x et 1, vérifie leur égalité puis retour true ou false
console.log(String(x) == "1"); // opérateur d'égalité: Compare deux valeurs x et 1, vérifie leur égalité puis retour true ou false
console.log(x != 1); //opérateur de différenceL:	Vérifie que x est différent de 1, puis retour true ou false
console.log(x.toString != 1); //opérateur de différenceL:	Vérifie que x est différent de 1, puis retour true ou false
console.log(x.toString != "1"); //opérateur de différenceL:	Vérifie que x est différent de 1, puis retour true ou false

//L'opérateur (ternaire) conditionnel:
//condition ? exprSiVrai : exprSiFaux
let points = 100;
let type = points > 100 ? "or" : "argent";
console.log(type);

// Les opérateurs logiques (booléens)
// && ET logique Vérifie que toutes les conditions sont true ((expression1)&&(expression2))
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
// || OU logique Vérifie qu'une des conditions est true	((expression1)||(expression2))
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
// !  NON logique Inverse l'état d'une variable booléenne (retourne la valeur 1 si la variable vaut 0, 0 si elle vaut 1) (!condition)
console.log(!true); //false
console.log(!false); //true

// Opérateurs logiques avec les valeurs non-booléens
//Les valeurs fausses (falsy) sont des valeurs évaluées comme fausses quand elles sont évaluées dans un contexte booléen.
//Falsy (false): undefined, null, 0, false, "", NaN
//Le contraire est une valeur truthy.
console.log(false || true);
console.log(false || "Bienvenu");
console.log(false || 1);

//exemple:
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

// La precedence
let x = 2 + 3 * 4;
console.log(x); // Mulitiplication l'emporte;
let x = (2 + 3) * 4;
console.log(x); // Parenthese l'emporte;

// Exercice: fait en sorte que le log de red donne blue et vis versa
let a = "red";
let b = "blue";

console.log(a);
console.log(b);
