const prompt = require("prompt-sync")();
const chalk = require("chalk");

// console.log("Hello, World!");

/*
let name = prompt(chalk.yellow("Digite o seu nome: "));

if (name == "") {
  console.log("Olá, React T3!!");
} else {
  console.log("Olá,", name);
}

console.log(chalk.hex("#DEADED")("Hello, World!"));
*/

async function fetchUsers() {
  try {
    const apiURL = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(apiURL);

    if (response.ok == false) {
      console.error("Erro na requisição!");
      return;
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error("Erro na API do servidor", error);
  }
}

fetchUsers();

// Some todos os números que vierem pelo terminal. Use a flag "pare", para finalizar a captura de números pelo terminal.
