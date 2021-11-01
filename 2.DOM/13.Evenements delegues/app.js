/* LES PHASES DE CAPTURE ET DE BOUILLONNEMENT(EVENT BUBBLING)
Lorsqu’un évènement se déclenche, celui-ci va en fait naviguer à travers le DOM 
et passer à travers les différents gestionnaires d’évènement disposés dans le document. 
On dit également que l’évènement se « propage » dans le DOM.

Cette propagation va se faire selon différentes phases qu’on appelle phase de capture et phase de bouillonnement.
les gestionnaires d’évènements sont par défaut configurés pour ne s’exécuter (ou pour ne « répondre ») que 
dans la phase de bouillonnement et pour ignorer la phase de capture.

Il existe cependant des outils qui nous permettent de modifier ce comportement par défaut et de faire en sorte
qu’un gestionnaire se déclenche durant la phase de capture.
IL SUFFIT DE passer un troisième argument booléen à la méthode addEventListener(event, callback, true)
*/

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELEGATION
// sans evenement delegue:

/* 
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);
function deleteItem() {
  console.log("delete item");
} 
*/
document.body.addEventListener("click", deleteItem);
function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  // console.log("delete item");
  //}

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
