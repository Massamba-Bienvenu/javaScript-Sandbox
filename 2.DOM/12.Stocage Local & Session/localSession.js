const form = document.querySelector("form");
const input = document.querySelector("#name");
const submit = document.querySelector("#submitName");
const remove = document.querySelector("#removeName");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// 1. Ajouter un element dans sessionStorage
submit.addEventListener("click", () => {
  sessionStorage.setItem("name", input.value);
});

// 2. Supprimer un element dans sessionStorage
remove.addEventListener("click", () => {
  sessionStorage.removeItem("name");
});

// 3. Obtenir un element dans sessionStorage
const hisName = sessionStorage.getItem("name");
const h1 = document.querySelector("#title");
hisName
  ? (h1.textContent = `Welcome ${hisName}`)
  : (h1.textContent = `No body to welcome`);
