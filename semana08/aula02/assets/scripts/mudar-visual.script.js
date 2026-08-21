console.log("Mudar Visual");

const order01 = document.getElementById("order-01");

function finish() {
  order01.classList.remove("canceled");
  order01.classList.add("done");
}

function cancel() {
  order01.classList.remove("done");
  order01.classList.add("canceled");

  order01.classList.toggle("detail");
}
