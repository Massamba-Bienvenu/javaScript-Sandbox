// Exercice_1:
let array = ["a", "b", "c", "d", "c", "e", "f", "a", "g"];
elementsSupprimes = array.splice(0, 3);

// imprimer sur le terminal toutes les lettres qui se retrouvent
// a la fois dans array et dans elementsSupprimes.

for (let elemSup of elementsSupprimes) {
    for (let elemArr of array) {
      if (elemSup !== elemArr) {
        console.log(elemSup);
      }
    }
  }
// Exercice_2:
let emploisDutemps = {
    jour: "Lundi",
    cours: "physiques",
    prof: "Mass",
    exercice: 1
}
let monArray = ["cours", "Mass", "prof", "janvier", 1]

// Imprimer sur le terminal toutes les propriétés  de l'objet emploisDutemps  ainsi que leurs valeurs 
// dans le format "jour: Lundi" ,si le nom de la propreté  est un element de monArray.