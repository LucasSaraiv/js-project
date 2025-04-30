
const enviar = document.getElementById('enviar').addEventListener('click', verifica);
    function verifica(){
        let valor =  parseInt(document.getElementById('valor').value);
        while (valor <1 || valor >10 || isNaN(valor)){
            error = document.querySelector('.error');
            error.style.display= 'flex';
            break;
            
            }
             
        }
        
        