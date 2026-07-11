// Receber dados do usuário pelo terminal

const prompt = require("prompt-sync")()

let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")

//console.log(nome)
//console.log(idade)

// Olá, Felipe! Ano que vem você fará 35 anos!

let resultado = Number(idade) + 1
console.log("Olá, " + nome + "! Ano que vem você fará " + resultado + " anos!")