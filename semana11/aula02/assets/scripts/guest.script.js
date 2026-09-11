console.log("Página de visitante");

const guestName = document.getElementById("guest-name");

const guestKey = "visitante-nome";

// guestName.textContent = "Felipe";

let storedGuestName = localStorage.getItem(guestKey);

if (storedGuestName) {
  guestName.textContent = storedGuestName;
}

const guestForm = document.getElementById("guest-form");

guestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const guestNameInput = document.getElementById("guest-name-input").value;

  localStorage.setItem(guestKey, guestNameInput);

  storedGuestName = localStorage.getItem(guestKey);

  guestName.textContent = storedGuestName;
});
