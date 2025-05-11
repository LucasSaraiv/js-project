// Pede para o usuário digitar um nome
let nome = prompt("Digite um nome");

// Função para inverter uma string
function inverterString(texto) {
  return texto.split('').reverse().join('');
}

// Função para verificar se é palíndromo
function ehPalindromo() {
  // Remove espaços e deixa tudo minúsculo
  let nomeTratado = nome.replace(/\s/g, '').toLowerCase();
  
  // Inverte o texto tratado
  let nomeInvertido = inverterString(nomeTratado);
  
  // Compara o original com o invertido
  if (nomeTratado === nomeInvertido) {
    console.log("É um palíndromo!");
  } else {
    console.log("Não é um palíndromo.");
  }
}

// Chama a função
ehPalindromo();