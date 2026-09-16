const prompt = require("prompt-sync")();

// Some todos os números que vierem pelo terminal. Use a flag "pare", para finalizar a captura de números pelo terminal.

let flag = "";
let sum = 0;

while (flag != "pare") {
  flag = prompt(
    "Digite um número ou a palavra 'pare' para encerrar a leitura dos números: ",
  );
  //console.log("Teste");
  if (flag != "pare") {
    sum = sum + Number(flag);
  }
}

console.log("Resultado da soma: ", sum);
