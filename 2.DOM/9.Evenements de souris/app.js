const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter -- sur l'élément parent
// card.addEventListener('mouseenter', runEvent);
// Mouseleave -- sur l'élément parent
// card.addEventListener('mouseleave', runEvent);
// Mouseover -- sur un autre element dans l'élément parent
// card.addEventListener('mouseover', runEvent);
// Mouseout -- sur un autre element dans l'élément parent
// card.addEventListener('mouseout', runEvent);
// Mousemove --bien pour les jeux

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

card.addEventListener("mousemove", runEvent);

// Gestionnaire d'événement
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
