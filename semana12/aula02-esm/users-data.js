const users = [
  {
    name: "Felipe",
    age: 34,
  },
  {
    name: "John Doe",
    age: 20,
  },
  {
    name: "Linus Torvald",
    age: 50,
  },
];

export function ageVerify(age) {
  age >= 18 ? console.log("Maior de idade") : console.log("Menor de idade!");
}

export default users;
