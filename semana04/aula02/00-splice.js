const shoppingList = ["arroz", "iogurte", "feijão", "café"]

// shoppingList.shift()

console.log(shoppingList)

//shoppingList.splice(1, 5)

//console.log(shoppingList)

/*const position = shoppingList.indexOf("feijão")
console.log(position)

shoppingList.splice(position, 1)
console.log(shoppingList)*/

shoppingList.splice(3, 1, "macarrão")
console.log(shoppingList)
