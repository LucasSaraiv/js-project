

let arreyDiv = [...document.getElementsByTagName('div')];

arreyDiv.forEach(Element =>{
  let novoElemento = document.createElement('h1');
   novoElemento.innerText = "titulo criado"
   Element.appendChild(novoElemento)
})