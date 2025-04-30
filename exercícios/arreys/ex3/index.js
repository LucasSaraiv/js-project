
let numeros = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];

let impar = [];
let par = [];

    for (let i = 1; i < numeros.length; i++){
        if (numeros [i] % 2 === 0){
            par.push(numeros[i]);

        }else{
            impar.push(numeros[i]);
        }
    }

    console.log(numeros)
    console.log(par)
    console.log(impar)