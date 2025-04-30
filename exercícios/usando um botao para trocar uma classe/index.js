

 
 const btnRed = document.getElementById('btnRed').addEventListener('click', addRed);
 const btnGreen = document.getElementById('btnGreen').addEventListener('click', addGreen);
 const btnLimpar = document.getElementById("btnLimpar").addEventListener('click', clean)

    function addRed(){
        const container = document.querySelector('.container');
        classRed = container.classList.contains('green');
        if(!classRed){
            container.classList.add('red');
        }
    }

    function addGreen(){
        const container = document.querySelector('.container');
        classGreen = container.classList.contains('red');
        if (!classGreen){
            container.classList.add('green')
        }
    }

    function clean(){
        const container = document.querySelector('.container');
        let  limpar =  container.classList.contains('green')
        if(limpar){
            container.classList.remove('green')
        }else{
            container.classList.remove('red')
        }

    }