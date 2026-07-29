const player1 = {
    name: "Bianca",
    score: 0,
    showScore() {
        console.log(`A jogadora ${this.name} tem ${this.score} pontos`)
    }
}

const player2 = {
    name: "Carla",
    score: 0,
    showScore() {
        console.log(`A jogadora ${this.name} tem ${this.score} pontos`)
    }
}

player1.showScore()
player2.showScore()