function dobro(numero) {
  return numero * 2;
  // console.log("Calculou!"); // Não é executado!
}

// dobro(10);

// console.log(dobro(20));

const resultado = dobro(30);
// console.log(resultado);

// É maior de idade ou não

/* function verificaMaiorIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
} */

function verificaMaiorIdade(idade) {
  let teste = "Teste";
  console.log(teste);
  // console.log(teSte); // Javascript é Case Sensitive

  return idade >= 18;
}

console.log(verificaMaiorIdade(16));
//console.log(verificaMaiorIdade(26));
