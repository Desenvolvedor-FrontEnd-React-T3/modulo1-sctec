class User {
    constructor(name) {
        this.name = name
    }

    login() {
        console.log(`${this.name} entrou no sistema!`) 
    }
}

class Student extends User {
    constructor(name, course) {
        super(name)
        this.course = course
    }

    showCourse() {
        console.log(`${this.name} está matriculado em ${this.course}`)
    }
}

const studentA = new Student("Gabriel", "Eng. Software")

studentA.login()
studentA.showCourse()