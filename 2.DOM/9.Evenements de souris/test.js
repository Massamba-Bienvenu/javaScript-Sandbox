const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

card.addEventListener("mousemove", (e) => {
  const bleu = Math.random() * 255;
  //   console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `Rouge:${e.offsetX}  Vert:${e.offsetY}  Bleu:${bleu}`;
  //   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY} ,${bleu} )`;
  document.querySelector(
    "body"
  ).style.backgroundColor = `rgb(${e.offsetX},${e.offsetY} ,${bleu} )`;
});
