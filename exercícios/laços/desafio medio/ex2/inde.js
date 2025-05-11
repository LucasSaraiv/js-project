
numero =  parseFloat(prompt("digite um numero "))
numeroPar = []


    for(let i = 0; i <= numero; i++){
        if(i % 2 === 0){
            numeroPar.push(i);
        }
    }
console.log(numeroPar)
 soma = 0;
    for (let i = 2; i < numeroPar.length; i++ ){
        soma += i;
    }
    console.log(soma)