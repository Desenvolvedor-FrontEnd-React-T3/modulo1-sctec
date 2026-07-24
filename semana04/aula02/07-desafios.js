// SEMANA 4 · AULA 2 — DESAFIOS EM GRUPO (métodos de array)
//
// ------------------------------------------------------------------
// Usem só o que já vimos: map · filter · find · ⭐every · ⭐reduce —
// e, nos ⭐, o que veio antes (shift/splice/indexOf,
// if/else, ternário).
//
// Combinem antes de começar: quem compartilha a tela e digita · quem lê o
// enunciado em voz alta · quem roda e confere a saída · quem apresenta.
//
// ==================================================================
//   DESAFIO 1 — Taxa de entrega 🛵          [map]
// ==================================================================
// Cada pedido do delivery paga R$ 7 de entrega. Gerem um NOVO array com
// o valor final de cada pedido (pedido + 7) e mostrem no terminal.
// No fim, mostrem também a lista original: ela mudou?
// const orders = [25, 40, 18];

// escreva aqui 👇

const orders = [25, 40, 18];

console.log("Valores sem frete", orders);

const ordersFrete = orders.map ((order) => {
    return order + 7
})

console.log("Valor total: ", ordersFrete);

// ==================================================================
//   DESAFIO 2 — Convites do churrasco 🥩          [map]
// ==================================================================
// Transformem a lista de convidados em frases prontas, no formato
// "Convite para: <nome>", e mostrem a lista de convites.
// const guests = ["Ana", "Bruno", "Carla"];

// escreva aqui 👇

const guests = ["Ana", "Bruno", "Carla"];

const invites = guests.map((nome) => `Convite para: ${nome}`);

console.log(invites.join("\n"));

// ==================================================================
//   DESAFIO 3 — Remédios dentro da validade 💊          [filter]
// ==================================================================
// A lista tem o ano de validade de cada remédio da caixinha.
// Fiquem só com os que vencem DEPOIS de 2026 e mostrem o resultado.
const expirationYears = [2024, 2027, 2023, 2030];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 4 — Primeira corrida cara 🚗          [find]
// ==================================================================
// A lista tem o valor das corridas do app, na ordem em que aconteceram.
// Peguem a PRIMEIRA corrida acima de R$ 20 e mostrem.
// Depois procurem uma acima de R$ 100 e mostrem o que aparece.
const rides = [12, 8, 25, 30];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 5 — ⭐ Encomendas dentro do limite 📦          [every]
// ==================================================================
// O limite do transportador é 10 kg por caixa. Respondam se TODAS as
// caixas estão dentro do limite — testem com as DUAS listas.
const parcels = [2, 5, 3];
const heavyParcels = [2, 12, 4];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 6 — ⭐ Gols do campeonato ⚽          [reduce]
// ==================================================================
// A lista tem os gols do time em cada jogo. Somem tudo e mostrem
// o total de gols do campeonato.
const goals = [2, 0, 3, 1];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 7 — ⭐ Promoção nas passagens ✈️          [filter + map]
// ==================================================================
// Só as passagens acima de R$ 800 entram na promoção.
// Primeiro separem essas passagens; depois apliquem 10% de desconto
// nelas (preço * 0.9). Mostrem as duas listas.
const flights = [450, 980, 1200, 700];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 8 — ⭐ Gastos grandes do mês 💳          [filter + reduce]
// ==================================================================
// No extrato do cartão, separem as compras acima de R$ 50 e descubram
// quanto elas deram JUNTAS. Mostrem a frase:
// "Gastei R$<total> em compras grandes."
const expenses = [120, 35, 89, 15];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 9 — ⭐ Faxina no celular 📱          [shift + splice + find]
// ==================================================================
// Liberando espaço: removam o jogo mais antigo (o primeiro da lista);
// removam "Xadrez" pelo NOME (sem contar a posição na mão!); por fim
// confiram se "Free Fire" continua instalado. Mostrem a lista a cada passo.
const games = ["Paciência", "Free Fire", "Xadrez", "Minecraft"];

// escreva aqui 👇

// ==================================================================
//   DESAFIO 10 — ⭐ Rifa da escola 🎟️          [find + ternário]
// ==================================================================
// A lista tem os números de rifa já vendidos. Procurem o número sorteado
// e imprimam "Prêmio entregue!" se ele foi vendido, ou "Ninguém ganhou."
// se não foi. Testem também com o número 99.
const soldTickets = [7, 13, 22, 30];
const drawnTicket = 22;

// escreva aqui 👇
