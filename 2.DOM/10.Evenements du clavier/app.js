const heading = document.querySelector("h5");
const select = document.querySelector("select");
const form = document.querySelector("form");
//form, nous utiliseront souvent preventDefault() on soumettons form
// car par défaut la soumission lancera la page " action="index.php""
const taskInput = document.getElementById("task");
// taskInput.value = "" // Cela effacera le champ de saisie

// ÉVÉNEMENTS DE SOUMISSION DU FORMULAIRE
// form.addEventListener('submit', runEvent);

// Keydown
// ÉVÉNEMENTS DE FORMULAIRE DE INPUT
// taskInput.addEventListener('keydown', runEvent);
// *Keydown*
// taskInput.addEventListener('keyup', runEvent);
// *Keypress*
// taskInput.addEventListener('keypress', runEvent);
// *Focus* -- quand nous cliquons dans le champ
// taskInput.addEventListener('focus', runEvent);
// *Blur* -- quand nous cliquons en dehors du champ
// taskInput.addEventListener('blur', runEvent);
// *Cut*
// taskInput.addEventListener('cut', runEvent);
// *Paste*
// taskInput.addEventListener('paste', runEvent);
// *Input* -- pour toute action dans input: saisie, couper, coller
// taskInput.addEventListener('input', runEvent);
// *Change* -- fonctionne bien avec les select--> option
// taskInput.addEventListener('change', runEvent);

select.addEventListener("change", runEvent);
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);
  // heading.innerText = e.target.value;
  // Obtenir une valeur d'entrée
  // console.log(taskInput.value);
  // e.preventDefault();
}
