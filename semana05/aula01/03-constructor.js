class Player {
    constructor(n, s) {
        this.name = n
        this.score = s
    }

    showScore() {
        console.log(`${this.name} tem ${this.score} pontos`)
        // console.log(this.name + " tem " + this.score + " pontos");  
    }

    addPoints() {
        this.score = this.score + 100
    }
}

const player1 = new Player("Bianca", 500)
const player2 = new Player("Carla", 200)

player1.showScore()
player2.showScore()

player2.addPoints()
player2.addPoints()

player1.addPoints()

player1.showScore()
player2.showScore()
