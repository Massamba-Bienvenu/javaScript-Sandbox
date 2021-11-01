// Définir l'élément de stockage local
var person = { name: "billy", age: 23 };
//stringify object and store
localStorage.setItem("person", JSON.stringify(person));
//retrieve the object
var retrievedPerson = JSON.parse(localStorage.getItem("person"));

// Définir l'élément de stockage de la session (sera perdue une fois que le navigateur est ferme)
// sessionStorage.setItem('name', 'Beth');

// retirer du stockage
// localStorage.removeItem('name');

// obtenir du stockage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// vider le stockage local
// localStorage.clear();
// console.log(name, age);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;
  // testons
  // localStorage.setItem("task", task);
  // alert("task saved");

  // conserver les changements
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
