const numbers = [10, 3, 8, 1, 6]

const bigger = numbers.filter((n) => {
    return n >= 6
})

console.log(numbers);
console.log(bigger);

const names = ["Ana", "Bruno", "Carlos"]

const moreThan5 = names.filter((name) => {
    return name == "Ana"
})

console.log(moreThan5);
