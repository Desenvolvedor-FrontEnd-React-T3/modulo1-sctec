console.log("Array na tela");

const animes = [
  {
    nome: "Naruto",
    ano: 2002,
  },
  {
    nome: "Dragon Ball",
    ano: 1986,
  },
  {
    nome: "One Piece",
    ano: 1999,
  },
  {
    nome: "Attack on Titan",
    ano: 2013,
  },
];

const list = document.getElementById("animes-list");

/*setTimeout(() => {
  list.innerHTML = "<p>Lista carregando...</p>";
}, 3000);*/

const list2 = `
    <ul id="lista-js">
    </ul>
`;

const listaJS = document.getElementById("lista-js");
console.log(listaJS);
/*
animes.forEach((anime) => {
  list.innerHTML += `
    <ul>
        <li>${anime.nome}</li>
    </ul>
    `;
});
*/
// appendChild
/*
list.innerHTML = `
    <ul>
        ${animes
          .map((anime) => {
            return `<li>${anime.nome}</li>`;
          })
          .join("")}
    </ul>
`;*/

const listHTML = animes.map((anime) => {
  console.log(anime.nome);

  return `
  <li class="anime">Nome: ${anime.nome} - Ano: ${anime.ano}</li>
  `;
});

console.log(listHTML);

list.innerHTML = `
    <ul>
        ${listHTML.join("")}
    </ul>
`;
