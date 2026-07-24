/* Base: use map pra aplicar 10% de desconto (preço * 0.9)
⭐ Use filter pra listar só os preços acima de 60
Arquivo: aula-2/06-atividade.js
*/

const prices = [100, 50, 30, 80, 120, 65, 45, 25, 90, 10];

const discounted = prices.map((p) => {
    return p * 0.9
})

// console.log(prices);

// console.log(discounted);

const biggerThan60 = discounted.filter((n) => {
    return n >= 60
})

console.log(discounted)

console.log(biggerThan60);

