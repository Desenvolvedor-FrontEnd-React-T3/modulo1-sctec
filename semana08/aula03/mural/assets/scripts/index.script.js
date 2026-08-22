console.log("index.script.js ligado ✅");

// ── 1. os elementos ────────────────────────────────────────────────

const themeButton = document.getElementById("theme-button");
const searchInput = document.getElementById("search-input");
const counter = document.getElementById("counter");
const body = document.body;

const cards = document.querySelectorAll(".event-card");
const filterButtons = document.querySelectorAll(".filter-button");

cards[0].classList.add("highlight");

// ── 2. o estado da tela ────────────────────────────────────────────
// Fica aqui fora, em let, para sobreviver de um evento para o outro.

let activeCategory = "Todos";
let searchTerm = "";

// ── 3. quem decide o que aparece ───────────────────────────────────

function applyFilters() {
  let visibleCount = 0;

  cards.forEach((card) => {
    // ⚠️ o dado mora na TELA: a categoria está escrita dentro de um <span>
    const cardCategory = card.querySelector(".tag").textContent;
    const cardTitle = card.querySelector("h2").textContent.toLowerCase();

    const matchesCategory =
      activeCategory === "Todos" || cardCategory === activeCategory;

    const matchesSearch = cardTitle.includes(searchTerm);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden");
      visibleCount = visibleCount + 1;
    } else {
      // ⚠️ sem o else, o que sumiu nunca volta. Filtro é sempre um par.
      card.classList.add("hidden");
    }
  });

  counter.textContent = `${visibleCount} de ${cards.length} eventos`;
}

// ── 4. os eventos ──────────────────────────────────────────────────

searchInput.addEventListener("input", () => {
  // ⚠️ o texto de um <input> está no .value, não no textContent
  searchTerm = searchInput.value.toLowerCase();
  applyFilters();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.textContent;

    // desliga em todos, liga só no clicado
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    applyFilters();
  });
});

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeButton.classList.toggle("dark-control");
  searchInput.classList.toggle("dark-control");

  filterButtons.forEach((button) => {
    button.classList.toggle("dark-control");
  });

  if (body.classList.contains("dark")) {
    themeButton.textContent = "Modo claro ☀️";
  } else {
    themeButton.textContent = "Modo escuro 🌙";
  }
});

// ── 5. a primeira passada ──────────────────────────────────────────

applyFilters();

/* O QUE INCOMODA NESTE CÓDIGO — e é o assunto de hoje:

   1. o dado mora na tela: para saber a categoria, a gente lê um <span>
   2. a gente conserta a tela no detalhe, cartão por cartão
   3. o map e o filter da Semana 4 estão parados — não existe array aqui
   4. não dá para acrescentar nem remover evento sem editar o HTML na mão */

const eventsList = [
  {
    categoria: "Feira",
    nome: "Feira do produtor",
    horario: "Domingo, 8h · Praça Central",
  },
];
