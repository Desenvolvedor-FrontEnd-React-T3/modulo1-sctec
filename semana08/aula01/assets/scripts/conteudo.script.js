console.log("Alterar Conteúdo");

const alteredText = "Este é o novo texto!";

const emptyBox = document.getElementById("box");
const tagP = document.getElementById("alter-text");

setTimeout(() => {
  tagP.textContent = alteredText;
}, 3000);

const littleText = "InnerHTML no JS --";
let i = 1;

/*
emptyBox.innerHTML = `
<p id="alter-text">Este é o texto gerado pelo ${littleText}.</p>

<ul>
`;
while (i <= 5) {
  `
    <li>Item ${i}</li>
    `;
  i++;
}

`
</ul>
`;
*/
