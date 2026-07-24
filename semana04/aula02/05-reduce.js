/* const values = [10, 20, 30, 40, 50]

const sum = values.reduce((total, n) => total + n, 0)

console.log(sum);
*/


// Quantas notas foram maiores que 6?
const grades = [8, 5, 9, 4, 7]

const passing = grades.reduce((count, grade) => {
    if(grade >= 6) {
        return count + 1
    }

    return count
}, 0)

console.log(passing);
