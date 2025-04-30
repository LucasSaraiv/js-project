
let maior = null;

for (let i = 0; i<=4; i++){
    let numero = prompt("digite um numero")

    if(maior == null || numero > maior){
        maior = numero
    }
} 
window.alert(maior)