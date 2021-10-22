/* 
Gestion des événements
***EVENT LISTENERS (ÉCOUTEURS D'ÉVÉNEMENTS ) ET L'OBJET ÉVÉNEMENT***
1. L'écouteur écoute l'événement qui se produit et 
2. Le gestionnaire d'événement (event handler) est la **fonction de rappel (callback function) 
qui est exécutée en réponse à ce qui se passe.

- addEventListener(<event>, <callback>)
voici la liste des événements existants: https://developer.mozilla.org/fr/docs/Web/Events

***EMPÊCHER LES ACTIONS PAR DÉFAUT DU NAVIGATEUR***
.preventDefault().
De nombreux événements conduisent automatiquement à certaines actions
effectuées par le navigateur.

Par exemple:
Un clic sur un lien - lance la navigation vers son URL.
Un clic sur un bouton de soumission de formulaire lance sa soumission au serveur.
Appuyer sur un bouton de la souris sur un texte et le déplacer - sélectionne le texte.
 */
// Méthode 1:
document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("Hello World");
  e.preventDefault();
});
// Méthode 2:
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log('Clicked');
  let val;
  val = e;
  // Élément cible d'événement
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Type d'événement
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // POSITION DE LA SOURIS
  // dans les coordonnées locales (contenu du DOM);
  val = e.clientY;
  val = e.clientX;
  // par rapport à l'élément parent
  val = e.offsetY;
  val = e.offsetX;
  // par rapport à la fenêtre du navigateur
  val = e.screenX;
  val = e.screenY;
  console.log(val);
}
