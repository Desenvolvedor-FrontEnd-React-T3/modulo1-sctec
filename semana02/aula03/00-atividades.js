// Montanha Russa com critérios de altura

const prompt = require("prompt-sync")()

let alturaTexto = prompt("Digite a sua altura: ")
let alturaConvertida = Number(alturaTexto)

// console.log(typeof(alturaTexto))
// console.log(typeof(alturaConvertida))

// Se == if

if (alturaConvertida >= 140) {
    console.log("Pode entrar!")
} else if (alturaConvertida < 140 && alturaConvertida >= 120) {
    console.log("Pode entrar com Acompanhante!")
} else {
    console.log("Infelizmente não pode entrar!")
}