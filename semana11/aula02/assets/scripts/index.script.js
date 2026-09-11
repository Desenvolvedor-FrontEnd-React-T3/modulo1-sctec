console.log("Local Storage");

const form = document.getElementById("form");
const notesKey = "portaria-recado";

const notesList = [];

// Leitura no localStorage
let savedNote = localStorage.getItem(notesKey);

if (savedNote == null) {
  // Escrita no localStorage
  localStorage.setItem(notesKey, "Nenhum dado salvo!");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const note = document.getElementById("note").value;

  // console.log(note);

  notesList.push(note);

  // Escrita no localStorage
  localStorage.setItem(notesKey, JSON.stringify(notesList));

  savedNote = JSON.parse(localStorage.getItem(notesKey));

  console.log("Dado que veio do local storage:", savedNote);
});

//console.log("Dado que veio do local storage:", savedNote);

/*
const items = ["café", "arroz", "leite"];

localStorage.setItem("mercado-items", JSON.stringify(items));

const savedItems = JSON.parse(localStorage.getItem("mercado-items"));

console.log(savedItems);

const users = [
  {
    name: "Felipe",
    idade: 34,
  },
  {
    name: "Karen",
    idade: 29,
  },
];

localStorage.setItem("usuarios-lista", JSON.stringify(users));

const savedUsers = JSON.parse(localStorage.getItem("usuarios-lista"));

console.log(savedUsers);
*/
