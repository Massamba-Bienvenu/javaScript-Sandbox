const heading = document.querySelector("h5");
const select = document.querySelector("select");
const form = document.querySelector("form");
const taskInput = document.getElementById("task");

form.addEventListener("submit", (e) => {
  console.log("merci!");
  e.preventDefault();
});
