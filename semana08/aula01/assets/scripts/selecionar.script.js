console.log("Selecionar");

const event = document.querySelector(".event");
const events = document.querySelectorAll(".event");
const titleH2 = document.querySelector("h2");

titleH2.textContent = titleH2.textContent + " ⚠️";

console.log(events);

events.forEach((element) => {
  console.log(element.textContent);
});

let counter = 1;

events.forEach((item) => {
  item.textContent = `${counter} - ${item.textContent}`; // couter + item.textContent
  counter++;
});
