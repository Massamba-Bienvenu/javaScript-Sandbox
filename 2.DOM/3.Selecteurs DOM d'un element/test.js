console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "Yellow";
document.querySelector("li:nth-child(4)").textContent = "John smith";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
