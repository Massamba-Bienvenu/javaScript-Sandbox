const firstName = "William";
const lastName = "johnson";
const age = 36;
let val;
let tags;

//Concatenation
val = firstName + " " + lastName + " " + "a" + " " + age + " " + "ans";
//Append
val = "Brad ";
val += "Traversy";

//Template strings : insérer des variables dans une chaîne de caractère
val = `${firstName} est plus petit que ${lastName} car il a ${age} ans`;

// Escaping
// val  = " Fr. Branham dit : "la foi est un don" "
val = ' Fr. Branham dit : \n "la foi est un don" ';
val = ' Fr. Branham dit : \n "la foi est un don" ';
val = ' Fr. Branham dit : \n "la foi est un don" '; // \n aller a la ligne

//PROPRIÉTÉ
val = "bonjour mon nom est mass";
// Nombre total de caractères
val = val.length;
console.log(val);

//MÉTHODES SUR LES STRINGS
//.concat() // ajoute a un string un autre string
val = firstName.concat(" ", lastName, ",Merci");
console.log(val);

// Changer de majuscule en minuscule et vice versa
//.toUpperCase()
val = val.toUpperCase(); //Majuscule
//.toLowerCase()
val = val.toLowerCase(); //Miniscule
console.log(val);

//Obtenir le caractère situe a une certaine index:
//1. .charAt("index")
val = firstName.charAt("0");
console.log(val);
//2. string[index]
val = firstName[2]; // 2: index du caractère
console.log(val);

//Obtenir l'index (position) d'un caractère
val = firstName.indexOf("W");
console.log(val);
// Obtenir l'index de la dernière occurrence d'un caractère
val = firstName.lastIndexOf("l");
console.log(val);

//extraction d'une portion de caractères
//.substring(index_debut, nombre caractères_gardes)
val = firstName.substring(0, 4);
console.log(val);

//slice(index_debut, nombre caractères_gardes):
val = firstName.slice(0, 4);
val = firstName.slice(-3); //les trois derniers caractères
console.log(val);

//.split("") : sépare et transforme un string en un array de caractères
val = firstName.split("");
//.split("-" ou ",") : transform tout le contenu d'un string en un array d'un seul element
val = firstName.split(",");
console.log(val);

//.replace(string_a_change, nouveau_string) :
tags = "javascript, html, css";
tags = tags.replace("javascript", "Python");
console.log(tags);

//.includes(): True ou false si un mot est dans un string
tags = "javascript, html, css";
val = tags.includes("c++");
console.log(val);
