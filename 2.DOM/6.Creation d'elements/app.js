// creer un Elementent
const li = document.createElement("li");

// Ajouter une classe
li.className = "collection-item";

// Ajouter une d'identité
li.id = "new-item";

// Ajouter un attribut
li.setAttribute("title", "New Item");

// Créer un noeud de texte et ajouter
li.appendChild(document.createTextNode("Hello World"));

// Créer un nouvel élément de lien
const link = document.createElement("a");

// Ajouter des classes
link.className = "delete-item secondary-content";

// Ajouter l'icône HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Ajouter un lien dans LI
li.appendChild(link);

// Ajouter Li comme enfant à ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
