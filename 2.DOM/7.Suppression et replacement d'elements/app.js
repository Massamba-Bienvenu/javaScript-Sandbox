// REPLACE ELEMENT

// Créer un élément
const newHeading = document.createElement('h2');
// Ajouter une pièce d'identité
newHeading.id = 'task-title';
// Nouveau noeud de texte
newHeading.appendChild(document.createTextNode('Task List'));

// Obtenir le vieil en-tête
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Remplacer
cardAction.replaceChild(newHeading, oldHeading);

// Supprimer l'élément
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Supprimer l'élément de la liste
lis[0].remove();

//Supprimer l'élément enfant
list.removeChild(lis[3]);

// Classes & attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Les attributs
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

