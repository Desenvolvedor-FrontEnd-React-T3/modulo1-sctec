console.log("Value JS");

const inputName = document.getElementById("name");
const inputKey = document.getElementById("key");

//console.log(inputName.value);

inputName.addEventListener("input", () => {
  console.log(inputName.value);
});

inputKey.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (event.key == "Enter") {
    alert("Vai Corinthians!");
  }
});
