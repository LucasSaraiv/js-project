
const square = document.querySelector('.square')

    square.addEventListener('click', ()=>{
        classeblueexist = square.classList.contains('blue');
        if (classeblueexist){
            square.classList.remove("blue")
        }else{
            square.classList.add("blue")
        }
    })

