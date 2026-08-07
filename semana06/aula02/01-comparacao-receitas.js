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
    }
]

const recipe = recipes[0]

console.log("Receita:", recipe.name)
// console.log("Despensa:", pantry)
// console.log("Ingredientes:", recipe.ingredients)

// const listaA = ["Corinthians", "Paysandu"]
// const listaB = ["Corinthians", "Paysandu"]

// console.log(listaA == listaB)

let have = []
let missing = []

recipe.ingredients.forEach((item) => {
    const found = pantry.filter((element) => {
        return item.toLocaleLowerCase() === element.toLocaleLowerCase()
    })

    if (found.length > 0) {
        have.push(item)
    } else {
        missing.push(item)
    }
})

const totalIngredients = recipe.ingredients.length
const totalHave = have.length
const totalMissing = missing.length


console.log("Tenho:", have);
console.log("Falta:", missing);

/*
console.log(totalIngredients);
console.log(totalHave);
console.log(totalMissing);
*/

const result = (100 * totalHave) / totalIngredients

console.log(result.toFixed(2) + "%");

function analyzeRecipe(recipe) {

}