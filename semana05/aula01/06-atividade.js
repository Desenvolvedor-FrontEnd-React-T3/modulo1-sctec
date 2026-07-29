class Vehicle {
    constructor(brand) {
        this.brand = brand
    }

    move() {
        console.log(`${this.brand} está na estrada!`)
    }
}

class Car extends Vehicle {
    move() {
        console.log(`${this.brand} está sendo dirigido!`)
    }
}

class Bike extends Vehicle {
    move() {
        console.log(`${this.brand} está pedalando na ciclovia`)
    }
}

const car = new Car("Ford")
const bike = new Bike("Caloi")

car.move()
bike.move()