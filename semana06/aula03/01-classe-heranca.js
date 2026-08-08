const pantry = ["Farinha", "ovo", "leite", "sal", "açúcar"]

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
    },
    {
        name: "Salada",
        ingredients: [
            "alface", "tomate", "cenoura", "cogumelo", "azeite"
        ],
        minutes: 15
    },
    {
        name: "Suco",
        ingredients: [
            "laranja", "uva", "maçã", "limão", "açúcar"
        ],
        minutes: 5
    }
]

const dessertRecipes = [
    {
        name: "Pudim",
        ingredients: [
            "leite", "açúcar", "ovo", "baunilha"
        ],
        minutes: 60,
        chillTime: 120
    },
    {
        name: "Sorvete",
        ingredients: [
            "leite", "açúcar", "ovo", "morango"
        ],
        minutes: 30,
        chillTime: 60
    },
    {
        name: "Bolo de chocolate",
        ingredients: [
            "farinha", "açúcar", "ovo", "chocolate", "manteiga"
        ],
        minutes: 45,
        chillTime: 30
    }
]

class Recipe {
    constructor(name, ingredients, minutes) {
        this.name = name
        this.ingredients = ingredients
        this.minutes = minutes
    }

    describe() {
        return console.log(`${this.name} - ${this.ingredients.length} ingredientes, ${this.minutes}min.`)
    }

    analyze() {
        let have = []
        let missing = []

        this.ingredients.forEach((item) => {
            const found = pantry.filter((element) => {
                return item.toLowerCase() === element.toLowerCase()
            })

            if (found.length > 0) {
                have.push(item)
            } else {
                missing.push(item)
            }
        })

        if (have.length == 0) {
            console.log("Nenhum ingrediente disponível.")
        } else {
            console.log(`Ingredientes disponíveis: ${have.join(', ')}`)
        }

        if (missing.length == 0) {
            console.log("Todos os ingredientes estão disponíveis.")
        } else {
            console.log(`Ingredientes faltantes: ${missing.join(', ')}`)
        }
    }
}

class DessertRecipes extends Recipe {
    constructor(name, ingredients, minutes, chillTime) {
        super(name, ingredients, minutes)
        this.chillTime = chillTime
    }

    describe() {
        return console.log(`${this.name} (sobremesa) - ${this.ingredients.length} ingredientes, ${this.minutes}min + ${this.chillTime}min de resfriamento.`)
    }

    totalTime() {
        return console.log(`Tempo total: ${this.minutes + this.chillTime} minutos.`)
    }
}

/*
const recipe1 = new Recipe("Receita teste", ["carne", "arroz", "feijão"], 45)
recipe1.analyze()

const recipe2 = new DessertRecipes("Sobremesa teste", ["leite", "açúcar", "chocolate"], 30, 60)
recipe2.analyze()
recipe2.totalTime()
*/

function loadRecipes() {
    return new Promise((resolve) => {
        console.log("Carregando receitas do servidor...")
        setTimeout(() => {
            resolve(recipes)
        }, 3000)
    })
}

function loadDessertRecipes() {
    return new Promise((resolve) => {
        console.log("Carregando receitas de sobremesa do servidor...")
        setTimeout(() => {
            resolve(dessertRecipes)
        }, 3000)
    })
}

async function start() {
    try {
        const data = await loadRecipes()

        const loadedRecipes = data.map((item) => {
            return new Recipe(item.name, item.ingredients, item.minutes)
        })

        const dessertData = await loadDessertRecipes()

        const loadedDessertRecipes = dessertData.map((item) => {
            return new DessertRecipes(item.name, item.ingredients, item.minutes, item.chillTime)
        })

        console.log("Receitas carregadas com sucesso!")
        
        loadedRecipes.forEach((recipe) => {
            recipe.describe()
            recipe.analyze() 
        })

        loadedDessertRecipes.forEach((dessertRecipe) => {
            dessertRecipe.describe()
            dessertRecipe.analyze()
            dessertRecipe.totalTime()
        })

    } catch (error) {
        console.log("Erro ao carregar receitas: " + error)
    }
}

start()