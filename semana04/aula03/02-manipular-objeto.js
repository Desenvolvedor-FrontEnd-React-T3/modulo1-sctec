const car = {
    "brand": "Fiat",
    "year": 2020
}

car.color = "preto"

console.log(car);

car.year = 2025

console.log(car);

delete car.brand

console.log(car);

console.log(Object.keys(car))
console.log(Object.values(car))
