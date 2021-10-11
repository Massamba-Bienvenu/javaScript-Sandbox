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
  exercice: 1,
};
let monArray = ["cours", "Mass", "prof", "janvier", 1];

// Imprimer sur le terminal toutes les propriétés  de l'objet emploisDutemps  ainsi que leurs valeurs
// dans le format "jour: Lundi" ,si le nom de la propreté  est un element de monArray.

/* 
Exercice_3:
Ecrivez un programme JavaScript pour afficher le jour et l'heure dans le format suivant.  Allez dans l'éditeur
Exemple de sortie : Aujourd'hui est : Mardi.
L'heure actuelle est : 22h : 30 : 38

Exercice_4:
Ecrivez un programme JavaScript pour trouver l'aire d'un triangle
 dont les longueurs de ses trois côtés sont 5, 6, 7. 

Exercice_5:
Écrivez un programme JavaScript pour convertir les températures de Celsius vers Fahrenheit. 
Allez dans l'éditeur
[ Formule : c/5 = (f-32)/9 [ où c = température en Celsius et f = température en Fahrenheit ]
Sortie attendue :
60°C est 140 °F

Exercice_6:
Ecrivez un programme JavaScript pour obtenir la différence entre un nombre donné et 13, 
si le nombre est supérieur à 13, renvoyez le double de la différence absolue. 

Exercice_7:
Écrivez un programme JavaScript pour calculer la somme des deux entiers donnés. 
Si les deux valeurs sont identiques, renvoie le triple de leur somme.

Exercice_8:
Ecrivez un programme JavaScript pour calculer la différence absolue entre un nombre spécifié et 19.
 Renvoie le triple de leur différence absolue si le nombre spécifié est supérieur à 19. 

 Exercice_9:
 Ecrivez un programme JavaScript pour vérifier deux nombres donnés
 et retourner vrai si l'un des nombres est 50 ou si leur somme est 50. 

 Exercice_10:
 Ecrivez un programme JavaScript pour vérifier à partir de deux entiers donnés,
  si l'un est positif et l'autre négatif.

  Exercice_11:
  Ecrivez un programme JavaScript pour supprimer un caractère 
  à la position spécifiée d'une chaîne donnée et renvoyer la nouvelle chaîne.

  Exercice_11:
  Ecrivez un programme JavaScript pour vérifier si un nombre positif donné est un multiple de 3 ou un multiple de 7. 
  Exercice_11:

  Exercice_11:
  Ecrivez un programme JavaScript pour créer une nouvelle chaîne à partir d'une chaîne donnée en prenant 
  les 3 derniers caractères et en les ajoutant à la fois au début et à l'arrière. La longueur de la chaîne doit être de 3 ou plus.
  Exercice_11:
Écrivez un programme JavaScript pour trouver le plus grand de trois entiers donnés.
  Exercice_11:
  Écrivez un programme pour vérifier si un caractère spécifié existe entre la 2e et la 4e position dans une chaîne donnée.
  Exercice_11:
  Ecrivez un programme JavaScript pour créer une nouvelle chaîne dont les 3 premiers caractères 
  sont en minuscules à partir d'une chaîne donnée. Si la longueur de la chaîne est inférieure à 3, 
  convertissez tous les caractères en majuscules.
  Exercice_11:
  Écrivez un programme JavaScript pour mettre en majuscule la première lettre de chaque mot d'une chaîne donnée. 
  Exercice_11:
   Écrivez un programme JavaScript pour calculer la somme de trois éléments d'un tableau donné d'entiers de longueur 3
  Exercice_11:
  Écrivez un programme JavaScript pour vérifier si le premier et le dernier élément 
  sont égaux à un tableau donné d'entiers de longueur 3. 
  Exercice_11:
   Ecrivez un programme JavaScript pour tester si un tableau d'entiers de longueur 2 contient 1 ou un 3.
  Exercice_11:
  Ecrivez un programme JavaScript pour tester si un tableau d'entiers de longueur 2 ne contient pas 1 ou un 3.
  Exercice_11:
  Écrivez un programme JavaScript pour tester si un tableau donné d'entiers contient 30 et 40 deux fois. 
  La longueur du tableau doit être 0, 1 ou 2.
  Exercice_11:
   Écrivez un programme JavaScript pour vérifier si deux tableaux d'entiers de même longueur sont similaires ou non. 
   Les tableaux seront similaires si un tableau peut être obtenu à partir d'un autre tableau 
   en échangeant au plus une paire d'éléments.
  Exercice_11:
   Écrivez un programme JavaScript pour trier un tableau de tous les nombres premiers compris entre 1 et un entier donné.
*/
