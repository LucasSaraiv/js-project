
    let numeros = []

    for(let i = 0; i < 5; i++ ){
       let numero =  parseFloat(prompt("digite um numero"))
        numeros.push(numero);
    }
    console.log(numeros)

    soma = 0;

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    console.log(soma)

    media = soma/5;

    console.log(media)

    
    for (let i = 0; i <5; i++){
        console.log(i);
    }

    i=1
    while (i>0 || i<=5){
        console.log(i)
    }