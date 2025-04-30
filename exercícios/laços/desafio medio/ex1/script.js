
// Pede para o usuário um número
const numero = parseInt(prompt("Digite um número de 1 a 10:"));

// Verifica se o número está entre 1 e 10
if (numero >= 1 && numero <= 10) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log("Erro: Você deve digitar um número entre 1 e 10!");
}