class Task {
    constructor(title, done) {
        this.title = title
        this.done = done
    }

    describe() {
        return `${this.title} - ${this.done ? "Feito" : "Pendente"}`
    }
}

function loadFromServer() {
    const data = [
        { title: "Estudar closures", done: false },
        { title: "Fazer o mini-projeto", done: false },
        { title: "Revisar o conteúdo", done: true }
    ]

    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(data)
        }, 3000)
    })
}

async function start() {
    console.log("Carregando tarefas do servidor...");
    
    const rawData = await loadFromServer()

    const tasks = rawData.map((item) => new Task(item.title, item.done))
    tasks.forEach((element) => {
        console.log(element.describe())
    });
    
}

start()