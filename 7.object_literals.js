//Crée un objet maVoiture et
//lui donne les propriétés: fabricant, modèle, et année
// Methode 1:
let maVoiture = new Object();
maVoiture.fabricant = "ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;

//Methode 2:
let maVoiture = {
  fabricant: "ford",
  modele: "Mustang",
  anne: 1969,
  meth: function (params) {
    console.log(params);
  },
};

// Operateur delete: supprime une propriete dans un objet
delete maVoiture.fabricant;
delete maVoiture.meth; //pas besoin de ()

//Exemple:
const person = {
  fistName: "Steve",
  lastName: "Smith",
  age: 26,
  email: "divin@gmail.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "Florida",
    zones: ["ABC", "DEF"],
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

// acceder aux propretes et methodes d'un objet:
let val;
val = person;
val = person.fistName;
val = person["fistName"];
val = person.age;
val = person["age"];
val = person.hobbies;
val = person["hobbies"];
val = person.hobbies[0];
val = person["hobbies"][1];
val = person["address"]["zones"][1];
val = person.address.zones[1];
console.log(val);

// FONCTION CONSTRUCTEUR ET FONCTION USINE
// FONCTION USINE:
function createCircle(radius) {
  return {
    radius: radius, // ou radius, tout simplement
    draw() {
      console.log("daw");
    },
  };
}
// Appelons le constructeur
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//FONCTION CONSTRUCTEUR
//1. le nom de la fonction doit être en notation Pascal
function Circle(radius) {
  //utiliser this. pour initialiser l'objet
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  return this; //pas nécessaire car new va le faire
}

const circle = new Circle(1);
//new cree un object js vide: const x = {}
//this pointe a cet objet vide
//new ajout return this apres la function
