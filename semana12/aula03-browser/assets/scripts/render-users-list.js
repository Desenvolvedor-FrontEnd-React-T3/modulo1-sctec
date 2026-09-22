import users from "./fetch-users.js";

console.log(users);

const usersList = document.getElementById("users-list");

export function renderUsers() {
  usersList.innerHTML = users
    .map((user) => {
      return `
    <p>${user.name}</p>
    `;
    })
    .join("");
}
