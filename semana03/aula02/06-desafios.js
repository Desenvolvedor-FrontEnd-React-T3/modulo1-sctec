// Desafio 1 — Preço com desconto 🏷️
// Escreva a função "precoComDesconto(preco, desconto)" que DEVOLVE
// o preço já com o desconto aplicado (desconto em %).
// Pratica: função, parâmetros, return

function precoComDesconto(preco, desconto) {
  const valorComDesconto = preco - (preco * desconto) / 100;

  return valorComDesconto;
}

console.log(precoComDesconto(100, 10)); // 90

const precoComDescontoArrow = (preco, desconto) =>
  preco - (preco * desconto) / 100;

console.log("Minha função", precoComDescontoArrow(100, 20)); // 80

// DESAFIO 2 — ⭐ Maior de dois 🔢
// Escreva "maiorDeDois(a, b)" que DEVOLVE o maior dos dois números.
// Pratica: função + if/else + return dentro da decisão

const maiorEntreDois = (num1, num2) =>
  num1 > num2
    ? console.log("primeiro número é maior: " + num1)
    : console.log("Segundo número é maior" + num2);

maiorEntreDois(2, 3);
