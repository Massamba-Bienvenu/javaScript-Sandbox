//Crée un objet maVoiture et
//lui donne les propriétés: fabricant, modèle, et année
// Methode 1:
// let maVoiture = new Object();
// maVoiture.fabricant = "ford";
// maVoiture.modele = "Mustang";
// maVoiture.annee = 1969;

//Methode 2:
let maVoiture = {
  fabricant: "ford",
  modele: "Mustang",
  anne: 1969,
};
console.log(maVoiture);

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
