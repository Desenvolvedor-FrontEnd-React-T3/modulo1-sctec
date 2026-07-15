// CONTAGEM REGRESSIVA 5 até 1
/*
console.log("=======CONTAGEM REGRESSIVA=======");

for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log("Já!");
*/

// 1+2+3+4+5+6+7+8+9+10 = 55 -- Usando while

/*let resultado = 0
let numero = 1

while (numero <= 10) {
    resultado = resultado + numero // resultado += numero
    console.log("Resultado parcial: ", resultado)
    numero ++
}

console.log("Resultado final: ",resultado);
*/

// Atividade 3 — Cofrinho da viagem   (WHILE: repita ATÉ bater a meta)
// Cenário: você quer juntar R$ 100 pra uma viagem e guarda R$ 15 no
//          cofrinho toda semana. Em quantas semanas você bate a meta?
//          Mostre o saldo a cada semana.

let cofrinho = 0 // Mostrar o saldo que vou guardando semanalmente
const deposito = 15 // Valor fixo de R$ 15
let semanas = 0 // Contador de semanas até bater a meta

while (cofrinho < 101) { // cofrinho <= 100
    cofrinho += deposito
    semanas ++
    console.log("Semana " + semanas + " - Saldo atual: R$ " + cofrinho)
}

console.log("Quantidade de semanas necessárias: " + semanas);
