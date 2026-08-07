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

function analyzeRecipe(recipe) {
    let have = []
    let missing = []

    recipe.ingredients.forEach((item) => {
        const found = pantry.filter((element) => {
            return item.toLowerCase() === element.toLowerCase()
        })

        if (found.length > 0) {
            have.push(item)
        } else {
            missing.push(item)
        }
    })

    return {
        name: recipe.name,
        have,
        missing
    }
}

recipes.forEach((item) => {
    const result = analyzeRecipe(item)

    console.log(`${result.name} - Tenho: ${result.have} - Falta: ${result.missing}`)
})