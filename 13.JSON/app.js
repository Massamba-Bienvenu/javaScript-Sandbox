/* JSON (JavaScript Object Notation)
JSON est un format d'échange de données
un format de texte utilisé pour échanger des données entre plates-formes come XMl.

• Un objet JSON est uniquement un format de données — 
  il ne contient que des propriétés mais pas de méthodes.
• Dans la paire nom-valeur JSON, le nom est toujours entouré de guillemets doubles.
• Dans la paire nom-valeur JSON, la valeur peut être une chaîne, un nombre, un booléen, un null,
objet ou tableau.
• La liste des paires nom-valeur en JSON est entourée d'accolades.
• En JSON, plusieurs paires nom-valeur sont séparées par une virgule.
• Les fichiers JSON utilisent l'extension .json.

Le JSON se présente sous la forme  d'une chaîne de caractères
 Il a donc besoin d'être converti en un objet JavaScript natif 
 lorsque vous souhaitez accéder aux données.

 Note : Convertir une chaîne de caractères en un objet natif se nomme analyse syntaxique (parsage)
 tandis que le contraire porte le nom  de la linéarisation (stringification).

JSON est indépendant du langage de programmation
Le « JSON » qui ne validerait pas
{
 title : "This is my title.",
 body : "This is the body."
}

Ce n'est pas un JSON valide
{
  'title' : 'Ceci est mon titre.',
  « corps » : « C'est le corps. »
}
JSON valide
{
 "title": "This is my title.",
 "body": "This is the body."
}

*/
// parse() qui accepte un objet JSON sous la forme d'une chaîne de caractères
//   et renvoie l'objet JavaScript correspondant.
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// console.log(obj);

// stringify() qui accepte un objet JavaScript une chaîne de caractères JSON.
// var myJSON = { name: "Chris", age: "38" };
// myJSON;
// var myString = JSON.stringify(myJSON);
// console.log(myString);

// store the form input elements as a variable
const elems = document.querySelectorAll("input");
// store field values
function processField() {
  localStorage.setItem(window.location.href, "true");
  localStorage.setItem(this.id, this.value);
}
// clear individual fields
function clearStored() {
  elems.forEach((elem) => {
    if (elem.type === "text") {
      localStorage.removeItem(elem.id);
    }
  });
}
// capture submit button to clear storage when clicked
document.getElementById("inputform").onsubmit = clearStored;
// on form element change, store the value in localStorage
elems.forEach((elem) => {
  if (elem.type === "text") {
    const value = localStorage.getItem(elem.id);
    if (value) elem.value = value;
    // change event
    elem.onchange = processField;
  }
});
