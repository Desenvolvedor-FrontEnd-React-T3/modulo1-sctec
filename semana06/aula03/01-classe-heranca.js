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

class Recipe {
    constructor(name, ingredients, minutes) {
        this.name = name
        this.ingredients = ingredients
        this.minutes = minutes
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

    totalTime() {
        return this.minutes + this.chillTime
    }
}

const recipe1 = new Recipe("Receita teste", ["carne", "arroz", "feijão"], 45)
recipe1.analyze()

const recipe2 = new DessertRecipes("Sobremesa teste", ["leite", "açúcar", "chocolate"], 30, 60)
recipe2.analyze()
console.log(recipe2.totalTime() + " minutos no total.")