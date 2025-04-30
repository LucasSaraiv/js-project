
 const numero = [2,1]; 
    
for (let i = 0; i < numero.length; i++) {
    for (let j = 0; j < numero.length - 1; j++) {
      if (numero[j] > numero[j + 1]) {
        // troca os elementos
        let temp = numero[j];
        numero[j] = numero[j + 1];
        numero[j + 1] = temp;
      }
    }
  }
  
  window.alert(numero); // [1, 2]