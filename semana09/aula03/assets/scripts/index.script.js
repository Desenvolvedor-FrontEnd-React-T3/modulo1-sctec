console.log("Validação");

const form = document.getElementById("form");
const eventsList = document.getElementById("eventsList");

const list = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const eventName = document.getElementById("event").value.trim();

  if (eventName == "") {
    return console.log("Nome inválido!");
  }

  // console.log(eventName);

  const sameTitle = list.filter((item) => {
    return item.toLowerCase() == eventName.toLowerCase();
  });

  if (sameTitle.length > 0) {
    return console.log("Evento já cadastrado!");
  }

  // console.log(sameTitle);

  list.push(eventName);

  // console.log(list);

  const finalList = list
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  eventsList.innerHTML = finalList;
});
