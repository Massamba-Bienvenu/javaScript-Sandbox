//Crée un objet maVoiture et
//lui donne les propriétés: fabricant, modèle, et année
// Methode 1:
let maVoiture = new Object();
maVoiture.fabricant = "ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;

//Les objets sont dynamiques: on peut les modifier
//Methode 2:
let maVoiture = {
  fabricant: "ford",
  modele: "Mustang",
  anne: 1969,
  meth: function (params) {
    console.log(params);
  },
};

// Opérateur delete: supprime une propriété dans un objet
delete maVoiture.fabricant;
delete maVoiture.meth; //pas besoin de () pour les methodes

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

// acceder aux propretés et méthodes d'un objet:
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
// fonction usine
function createCar(annee) {
  return {
    fabricant: "Toyota",
    annee: annee,
    color: "jaune",
    drive: function (params) {
      console.log(params);
    },
  };
}

function createCar(color, annee = 1980) {
  return {
    fabricant: "Toyota",
    annee, //annee:annee, ecrire juste annee,
    color,
    drive: function (params) {
      console.log(params);
    },
  };
}
car1 = createCar("Bleu");
car2 = createCar("Rouge", 1970);
console.log("car1 = ", car1, "\n", "Car2 = ", car2);

//FONCTION CONSTRUCTEUR
// fonction constructeur
function CreateCar(color, annee = 1980) {
  this.fabricant = "Toyota";
  this.annee = annee;
  this.color = color;
  this.drive = function (params) {
    console.log(params);
  };
  return this; //pas necessaire
}
const car1 = new CreateCar("white");
const car2 = new CreateCar("yellow", 2010);
const car3 = new CreateCar("Vert", 1978);
console.log(car1, car2, car3);
console.log(car1.constructor); // Afficher le construteur de l'objet

/* LA PROPRIÉTÉ constructor
chaque Object en javascript possède une propriété appel: .constructor;
elle fait référence vers la fonction qui a construit l'objet. */
const circle = new Circle(1);
console.log(circle.constructor);

//CLONER UN OBJET: object.assign
const biblotheque = {
  nom: "Massbib",
  adress: "20 rue des scouts",
  tel: "00242 06 636 81 84",
};

const livre = {
  titre: "Ma foi",
  annee: 2021,
  autheur: "DivinSIlo",
};

//Methode 1: utiliser Obejct.assign
let autreLivre = Object.assign(
  {
    prix: 123,
  },
  biblotheque,
  livre
);

//methode 2: utiliser l'operateur ...spread
autreLivre = {
  prix: 128,
  ...biblotheque,
  ...livre,
};
console.log(autreLivre);