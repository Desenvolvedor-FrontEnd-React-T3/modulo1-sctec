const pantry = ["farinha", "ovo", "leite", "sal", "açúcar"]

// Bolo, panqueca, omelete...

const recipes = [
    { 
        name: "Bolo simples",
        ingredients: [
            "farinha", "ovo", "leite", "sal", "açúcar", "fermento", "manteiga"
        ],
        minutes: 45
    },
    {
        name: "Panqueca",
        ingredients: [
            "farinha", "ovo", "leite", "sal", "azeite"
        ],
        minutes: 10
    },
    {
        name: "Omelete",
        ingredients: [
            "ovo", "sal", "queijo", "presunto", "manteiga"
        ],
        minutes: 8
    }
]

const filterRecipes = recipes.forEach((item) => {
    item.ingredients.find((item2) => {
        return item2 == "queijo"
    })
})

console.log(filterRecipes);


class Recipe {
    constructor(name, ingredients, minutes) {
        this.name = name
        this.ingredients = ingredients
        this.minutes = minutes
    }

    describe() {
        return `${this.name} - ${this.ingredients.length} ingredientes, ${this.minutes}min.`
    }
}

class DessertRecipes extends Recipe {
    constructor(name, ingredients, minutes, chillMinutes){
        super(name, ingredients, minutes)
        this.chillMinutes = chillMinutes
    }

    totalTime() {
        return this.minutes + this.chillMinutes
    }

    describe() {
        return `${this.name} (sobremesa) - ${this.ingredients.length} ingredientes, tempo total: ${this.totalTime()}min.`
    }
}

function loadRecipes() {
    return new Promise((resolve) => {
        console.log("Carregando receitas do servidor...")

        setTimeout(() => {
            resolve([
                {
                    name: "Panqueca",
                    ingredients: [
                        "farinha", "ovo", "leite", "sal", "azeite"
                    ],
                    minutes: 10
                },
                { 
                    name: "Bolo simples",
                    ingredients: [
                        "farinha", "ovo", "leite", "sal", "açúcar", "fermento", "manteiga"
                    ],
                    minutes: 45
                },
            ])
        }, 4000)
    })
}

async function start() {
    try {
        const data = await loadRecipes()

        const loadedRecipes = data.map((item) => {
            return new Recipe(item.name, item.ingredients, item.minutes)
        })

        loadedRecipes.forEach((element) => {
            console.log(element.describe())
        })
    } catch (error) {
        console.log("Erro ao carregar dados do servidor!")
    }
}

start()

/*
const readyRecipes = recipes.map((item) => {
    return new Recipe(item.name, item.ingredients, item.minutes)
})

const dessertsRecipes = new DessertRecipes("Brigadeiro", ["leite", "chocolate", "manteiga", "granulado"], 15, 60)

readyRecipes.forEach((element) => {
    console.log(element.describe())
})

console.log(dessertsRecipes.describe());
*/