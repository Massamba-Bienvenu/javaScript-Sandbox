//OPERATORS
//Les opérateurs sont des symboles qui permettent de manipuler des variables,
//pour créer des expressions qui serviront a créer les algorithmes

//1.    OPÉRATEURS DE CALCULS
let x = 10;
let y = 3;
console.log(x + y); // Addition
console.log(x - y); // Soustraction
console.log(x * y); // Multiplication
console.log(x ** y); // Puissance
console.log(x / y); // Division
console.log(x % y); // opérateur modulo	Retourne le reste de la division

//2.    OPÉRATEURS D'INCRÉMENTATION
console.log(++x); //1.Incrémentation d'une unité
console.log(--x); //2.Décrémentation d'une unité

//3.    OPÉRATEURS D'AFFECTATION:
let x = 10;
console.log((x += 5)); //ajoute 5 a x;
console.log((x *= 5)); //multiplie x;
console.log((x /= 5)); //divise x par 5;
console.log((x **= 5)); //x a la puissance 5;
console.log((x %= 5)); // le reste de(x/5)

//4.opérateurs relationnels
let x = 1;
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

//5.Opérateurs de qualité
//5.1 opérateurs de qualité strict, Vérifie l'identité des valeurs
let x = 1;
console.log(x === 1);
console.log(String(x) === 1);
console.log(x.toString() !== 1);
console.log(x.toString() !== "1");

//2.2 opérateurs de qualité flexible, vérifie la difference de notation
console.log(x == 1);
console.log(String(x) == 1);
console.log(String(x) == "1");
console.log(x != 1);
console.log(x.toString != 1);
console.log(x.toString != "1");

//5.    L'opérateur (ternaire) conditionnel:
//condition ? exprSiVrai : exprSiFaux
let points = 100;
let type = points > 100 ? "or" : "argent";
console.log(type);

//6.    OPÉRATEURS LOGIQUES
//1. L'opérateur logique &&: retourne TRUE si les deux valeurs sont vraies
console.log(true && true);
console.log(true && false);

//2. L'opérateur logique || retourne TRUE si une valeur est vraie
console.log(true || true);
console.log(true || false);

//3. L'opérateur logique Not(!) Inverse l'état d'une variable booléenne
//retourne 1 si la variable vaut 0
//retourne 0 si la variable vaut 1
console.log(!true); //false
console.log(!false); //true

//4. Opérateurs logiques avec les valeurs non-booléens
//Les valeurs fausses (falsy): undefined, null, 0, false, "", NaN
//Le contraire est une valeur truthy.
console.log(false || true); //true
console.log(false || "Bienvenu"); //"Bienvenu"
console.log(false || 1); //1
console.log(false || 1 || 2); //short-circuiting

//Example
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);
