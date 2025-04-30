
const produtos = [
    { nome: 'Camisa', preco: 50 },
    { nome: 'Calça', preco: 80 },
    { nome: 'Sapato', preco: 120 },
    { nome: 'Boné', preco: 35 }
  ];
  
  let precoTotal = 0;
  
  produtos.forEach((item) => {
    console.log(`O produto ${item.nome} custa R$ ${item.preco}`);
    precoTotal += item.preco;
  });
  
  console.log(`Total: R$ ${precoTotal}`);