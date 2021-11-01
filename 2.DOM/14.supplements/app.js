/* 
children
firstChild
lastChild
appendChild()
 */
// Selection de l'element parent
const itemsCollection = document.querySelector(".collection");
// ajouter un elemnt enfant a un element
const itemsAppendChild = itemsCollection.appendChild(
  document.createElement("li")
);
// Selection de tous les elements enfants
const items = itemsCollection.children;
// acceder au premier enfant
const item_1 = itemsCollection.children[0];
const item_one = itemsCollection.firstElementChild;
// acceder au premier sous-descendant
const item_1_1 = itemsCollection.children[0].children[0];
const itemOneOne = itemsCollection.firstElementChild.firstElementChild;
// acceder au dernier element enfant
const lastItem = itemsCollection.lastElementChild;
// obtenir les attributs d'un element
const itemAttributes = itemsCollection.attributes;
// obtenir la valeur d'un attribut d'un element
const itemsAttribute = itemsCollection.getAttribute("class");
// ajouter un attribut a un element
const itemsAddAttribute = itemsCollection.setAttribute("title", "attribute");
// obtenir le nombre total d'elements enfant
const itemsCount = itemsCollection.childElementCount;
// obtenir une liste de classes d'un element
const itemsClassList = itemsCollection.classList;
// obtenir un string forme de tous les noms de classe d'un element
const itemStringClassName = itemsCollection.className;
// obtenir la hauteur d'un element incluant le padding
const itemsHeight = itemsCollection.clientHeight;
// obtenir la largeur d'un element
const itemsWidth = itemsCollection.clientWidth;

// connaitre si c'est un attribut
const isItemAttribute = itemsCollection.hasAttribute("class");
//  Insère un nouveau nœud enfant avant un nœud enfant existant spécifié
const newItem = itemsCollection.insertBefore(
  document.createElement("li"),
  itemsCollection.firstElementChild
);
// obtenir le frere suivant
const nextElement = itemsCollection.nextElementSibling;
// obtenir le frere precedant
const prevElement = itemsCollection.previousElementSibling;
// obtenir le nom d'un noeud  ==> UL
const nodeName = itemsCollection.nodeName;
// obtenir le type d'un noeud ==> 1
const nodeType = itemsCollection.nodeType;
//obtenir la valeur d'un noeud
const nodeValue = itemsCollection.firstElementChild.nodeValue;
//obtenir le parent d'un element
const itemsParent = itemsCollection.parentElement;
// Enlever un element du dom
// itemsCollection.remove();
// supprime un nœud enfant spécifié de l'élément spécifié
itemsCollection.removeChild(itemsCollection.children[1]);
// Supprime un attribut spécifié d'un élément
// const itemRemoveAttribute = itemsCollection.removeAttribute("class");
// Supprime un gestionnaire d'événements qui a été attaché avec la méthode addEventListener()
// const itemRemoveEventListener = itemsCollection.removeEventListener(
//   "click",
//   runEvent
// );
//Remplace un nœud enfant dans un élément
const newItemReplaced = itemsCollection.replaceChild(
  document.createElement("li"),
  itemsCollection.firstChild
);
console.log(itemsAppendChild);
//
