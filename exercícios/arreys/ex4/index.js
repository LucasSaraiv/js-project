
// 1. Array de nomes
let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

// 2. Pede um nome ao usuário
let nomeDigitado = prompt("Digite um nome:");

// 3. Verifica se o nome existe
if (nomes.includes(nomeDigitado)) {
  console.log("Nome encontrado!");
} else {
  console.log("Nome não encontrado.");
}

// 4. Adiciona o nome digitado na lista
nomes.push(nomeDigitado);

// 5. Mostra a lista atualizada
console.log("Lista atualizada de nomes:", nomes);