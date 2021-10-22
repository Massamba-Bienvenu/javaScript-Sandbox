let val = document.querySelector(".clear-tasks");

val.addEventListener("click", onClick);
function onClick(e) {
  console.log(e.screenX, e.screenY);
  e.preventDefault();
}

//FUNCTION DE RAPPEL ANONYME
// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("You clicked on me");
//   e.preventDefault();
// });

// FUNCTION DE RAPPEL FLÉCHÉE
// document
//   .querySelector(".clear-tasks")
//   .addEventListener("click", (e) => console.log(e.target));

//FUNCTION DE RAPPEL NOMMÉE
// let val = document.querySelector(".clear-tasks");
// val.addEventListener("click", onClick);
// function onClick(e) {
//   e.target.innerText = "Merci";
//   e.preventDefault();
// }
