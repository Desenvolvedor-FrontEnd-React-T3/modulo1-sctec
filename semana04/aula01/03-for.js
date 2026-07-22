const names = ["Henrique", "Loris", "Haroldo", "Priscila", "Lucas"]

//console.log(names);

let size = names.length

for (let i = 0; i < size; i ++) {
    console.log(names[i]);
    if (names[i] == 'Haroldo') {
        console.log("Meio do array");   
    }
}
