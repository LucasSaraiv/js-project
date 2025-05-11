
let nome = prompt("digite um nome")
let vogais = [];

let arrey =  nome.split('')
    for(let letra = 0; letra <arrey.length; letra++){
        if(arrey[letra] == 'a' || arrey[letra] == 'e' || arrey[letra] == 'i' || arrey[letra] == 'u' || arrey[letra] == 'o'){
            vogais.push(letra)
        }
    }
   
    
   let resultado = document.querySelector('.resultado')
        resultado.style.color ='red';
    resultado.innerText = vogais.length