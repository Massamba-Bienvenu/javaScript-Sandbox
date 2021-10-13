const num1 = 100;
const num2 = 50;
let val;

// Calculs simples:
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//  Les fonctions arithmétiques
val = Math.PI;
//Limiter le nombre de chiffres apres une virgule;
// console.log(val.toFixed(2));
val = Math.abs(-23.5);
// Connaître le sign d'un nombre
val = Math.sign(-23.5);
val = Math.sign(23.5);
val = Math.sign(0);

// Retourne l’entier arrondi supérieur de a
val = Math.ceil(2.3);
// Retourne l’entier arrondi inférieur de a
val = Math.floor(2.3);
//Retourne l’entier arrondi le plus proche de a
val = Math.round(2.5);
val = Math.round(2.3);
//Retourne le plus petit des paramètres
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
//Retourne le plus grand des paramètres
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// Racine carrée(square root:sqrt)
val = Math.sqrt(64);
// Puissance(power)
val = Math.pow(8, 3);
//Nombre aleatoire entre 0 et 1
val = Math.random();
//Nombre aleatoire avec un plafond 20.
// val = Math.random() * 20;
val = Math.round(Math.random() * 20);
// console.log(val.toFixed(2));
// console.log(Math.floor(val));
// console.log(Math.ceil(val));
console.log(val);
