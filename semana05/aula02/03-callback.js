function execute(a, b, operation) {
    return operation(a, b)
}

const add = (num1, num2) => num1 + num2
const multiply = (num1, num2) => num1 * num2

//console.log(execute(1, 2, add))
//console.log(execute(3, 8, multiply));

function finishAnalysis(name, onDone) {
    console.log("Análise concluída!");
    
    onDone(name)
}


const teste = (name) => {
    console.log(`${name}, revise suas pendências!`);
}

finishAnalysis("Ana", teste)
