

let arreySection = [...document.getElementsByTagName('section')]; // seleciona todas as sections e as coloca dentro de um arrey

arreySection.forEach(Element => { // percorre o arrey 
    newElement = document.createElement("button") //cria o novo elemento
    newElement.innerText = "Clique aqui" // muda o texto do buttao
    Element.appendChild(newElement) //adiciona o novo elemento a section 
})