// REPLACER ELEMENT
const parent = document.querySelector(".card-action");
const ancienTitre = document.getElementById("task-title");
const nouveauTitre = document.createElement("h2");
nouveauTitre.id = "task-title";
nouveauTitre.appendChild(document.createTextNode("faite votre choix"));
parent.replaceChild(nouveauTitre, ancienTitre);

// 2 Méthodes de suppressions de noeuds
// Méthodes 1: Supprimer l'élément de la liste de noeud
const lis = document.querySelectorAll("li");
lis[0].remove();

// Methodes 1: Supprimer l'élément enfant
const list = document.querySelector("ul");
list.removeChild(lis[3]);

// Classes & attr
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
//className (string) affiche tous toutes les classes
val = link.className;
// obtenir les noms de classe sous form de tableau
val = link.classList;
val = link.classList[0];
// ajouter une classe
link.classList.add("test");
//supprimer une classe
link.classList.remove("test");
val = link;

// Les attributs
// Obtenir la valeur d'un attribut
val = link.getAttribute("href");
// retourne un booléen(true ou false)
val = link.hasAttribute("href");
// ajouter un attribut
link.setAttribute("title", "Google");
// modifier un attribut
link.setAttribute("href", "http://google.com");
//supprimer un attribut
link.removeAttribute("title");
console.log(link);
