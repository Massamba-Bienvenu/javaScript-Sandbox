/* 
Le Document Object Model ou DOM (pour modèle objet de document):
Il fournit une **représentation structurée** du document sous forme d'un arbre et 
définit la façon dont la structure peut être manipulée par les programmes, 
en termes de *style et de contenu*.

*/
let val;

// obtenir le dom
val = document;

//Obtenir tous les elements html d'une page dans un array
val = document.all; // CRÉER UNE COLLECTION DE TOUS ELEMENTS DANS DOM
//aceder a un element
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute("src");

let scripts = document.scripts;
let scriptArr = Array.from(scripts);
scriptArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});
console.log(val);
