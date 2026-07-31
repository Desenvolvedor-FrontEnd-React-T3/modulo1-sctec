// Solicitação de empréstimo

function requestLoan(income) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(income >= 60000) {
                resolve("Empréstimo aprovado!")
            } else {
                reject("Empréstimo negado!")
            }
        }, 4000)
    })
}

requestLoan(400000)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

requestLoan(60000)
    .then((message) => {
        //console.log("Seguindo para análise...")
        return { "texto": "Seguindo para análise...", message}
    })
    .then((response) => {
        console.log(response.texto)
        console.log(response.message)
    })
    .catch((error) => console.log(error))