
// 1. Crie o array de frutas
let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

// 2. Mostre todas as frutas
console.log("Lista de frutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 3. Adicione uma fruta nova
frutas.push("abacaxi");

// 4. Remova a primeira fruta
frutas.shift();

// 5. Mostre a nova lista de frutas
console.log("Lista atualizada de frutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}