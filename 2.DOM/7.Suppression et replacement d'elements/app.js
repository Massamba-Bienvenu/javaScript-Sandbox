// REMPLACER UN  ELEMENT
const parent = document.querySelector(".card-action");
const ancienElement = document.getElementById("task-title");
const noveauElement = document.createElement("h2");
noveauElement.id = "task-title";
noveauElement.appendChild(document.createTextNode("Faites votre choix"));
parent.replaceChild(noveauElement, ancienElement);
console.log(noveauElement);

// 2 Méthodes de suppressions de noeuds
// Méthode 1: Supprimer l'élément de la liste de noeud
const lis = document.querySelectorAll("li");
lis[0].remove();

// Méthode 1: Supprimer l'élément enfant
const list = document.querySelector("ul");
list.removeChild(list.children[0]);
console.log(list);

// Classes & attr
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

//CLASSES
//className (string) affiche tous toutes les classes
val = link.className;
// obtenir les noms de classe sous form de tableau
val = link.classList;
val = link.classList[0];
// ajouter une classe
link.classList.add("classAjoute");
//supprimer une classe
link.classList.remove("classAjoute");
val = link;
//verifie si un mot fait partie de la list de classe
val = link.classList.contains("delete-item");
//donne true ou false
console.log(val);

// ATTRIBUTS
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
