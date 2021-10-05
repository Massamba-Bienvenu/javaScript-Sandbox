/* switch
L'instruction switch évalue une expression et, 
selon le résultat obtenu et le cas associé, 
exécute les instructions correspondantes. */

/* switch (expression) {
    case valeur1:
      Instructions à exécuter lorsque le résultat
      de l'expression correspond à valeur1
      instructions1;
      break;
    case valeur2:
      Instructions à exécuter lorsque le résultat
      de l'expression correspond à valeur2
      instructions 2;
      break;
    ...
    case valeurN:
      Instructions à exécuter lorsque le résultat
      de l'expression à valeurN
      instructionsN;
      break;
    default:
      Instructions à exécuter lorsqu'aucune des valeurs
      ne correspond
      instructions_def;
      break;
  } */

switch (expr) {
  case "Oranges":
    console.log("Oranges : 0.59 € le kilo.");
    break;
  case "Pommes":
    console.log("Pommes : 0.32 € le kilo.");
    break;
  case "Bananes":
    console.log("Bananes : 0.48 € le kilo.");
    break;
  case "Cerises":
    console.log("Cerises : 3.00 € le kilo.");
    break;
  case "Mangues":
  case "Papayes":
    console.log("Mangues et papayes : 2.79 € le kilo.");
    break;
  default:
    console.log("Désolé, nous n'avons plus de " + expr + ".");
}
console.log("Autre chose ?");

let day;
switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}
console.log(`Today is ${day}`);

//Regrouper différents cas pour exécuter une unique opération
var animal = "girafe";
switch (animal) {
  case "vache":
  case "girafe":
  case "chien":
  case "cochon":
    console.log("Cet animal est un mammifère");
    break;
  case "oiseau":
  default:
    console.log("Cet animal n'est pas un mammifère.");
}

// QUAND UTILISER SWITCH>>>CASE: 
//quand il y'a beaucoup de cas
