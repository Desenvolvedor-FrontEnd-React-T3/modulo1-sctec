function checkStock(quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Em estoque: ${quantity} unidade(s)`)
        }, 4000)
    })
}

async function showStock() {
    console.log("Buscando estoque...")
    const message = await checkStock(8)
    console.log("Resposta chegou...", message);
    console.log("Execução finalizada!")
}

showStock()