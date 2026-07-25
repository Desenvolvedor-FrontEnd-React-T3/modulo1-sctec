const students = [
    {"name": "Ana", "grade": 8, "imgURL": "https://link.com"},
    {"name": "Bruno", "grade": 5, "imgURL": "https://link.com"},
    {"name": "Carla", "grade": 7, "imgURL": "https://link.com"}
]

console.log(students);

// JSON

console.log(students[2].grade);

students.forEach((student) => {
    return console.log(student.name);
})
