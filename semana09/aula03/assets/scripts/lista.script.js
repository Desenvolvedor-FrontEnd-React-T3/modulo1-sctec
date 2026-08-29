console.log("Lista de Presença");

const form = document.getElementById("form");
const list = document.getElementById("list");
const nameError = document.getElementById("name-error");
const counter = document.getElementById("counter");

const guestList = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameError.textContent = "";

  const guestName = document.getElementById("guest").value.trim();
  const dish = document.getElementById("dish").value;

  if (guestName == "") {
    console.log("Nome inválido!");
    nameError.textContent = "Nome inválido!";
    return;
  }

  const guest = {
    name: guestName,
    dish,
  };

  guestList.push(guest);

  // console.log(guestList);

  // console.log(guestName, dish);

  const finalList = guestList
    .map((item) => {
      return `<li>${item.name} -- leva ${item.dish}</li>`;
    })
    .join("");

  list.innerHTML = finalList;

  counter.textContent = `${guestList.length} confirmado(s)`;
});
