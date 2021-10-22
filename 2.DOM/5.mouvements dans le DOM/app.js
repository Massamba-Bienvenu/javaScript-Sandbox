let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// obtenir tous les Nœuds Enfants incluant les sauts de ligne
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - ELEMENT_NODE(Un noeud Element  tel que <p> ou <div>)
// 3 - TEXT_NODE (Le Text actuel de l'Element ou Attr)
// 9 - DOCUMENT_NODE (Un noeud Document.)

// 2 - Attribute (obsolète)
// 8 - Comment (Un noeud Comment.)
// 10 - Doctype(c'est-à-dire <!DOCTYPE html>)

// Obtenir les nœuds d'éléments uniquement
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";

// Enfants d'enfants
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// Premier enfant
val = list.firstChild;
val = list.firstElementChild;

// Dernier enfant
val = list.lastChild;
val = list.lastElementChild;

// Compter les éléments enfants
val = list.childElementCount;

// Obtenir le nœud parent
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Obtenez le prochain frère
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Obtenir le frère précédent
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);
