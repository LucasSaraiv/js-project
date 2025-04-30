

//*operações do  tringulo 


const calculatriangulo = document.getElementById("calculatriangulo").addEventListener('click', calcularTriangulo);
const limparTrinagulo = document.getElementById('limparTrinagulo').addEventListener('click', limpaTriangulo);

    function  calcularTriangulo(){

        let base = document.getElementById("basetringulo").value;
        let altura = document.getElementById("alturatringulo").value;

        if (base == "" || altura == ""){
            window.alert("um dos campos estão vazios");
        }
        else if (isNaN(base) || isNaN(altura)) {
            window.alert("Os campos só aceitam números.");
        }
        else{
            area = (base*altura)/2
            document.getElementById('resultTrinagulo').innerText = `a área é: ${area}`;
        }
    }

    function limpaTriangulo() {
        document.getElementById('resultTriangulo').innerText = "";
    }



    //* operações com retangulo

const calcularRetangulo = document.getElementById('calcularRetangulo');
    calcularRetangulo.addEventListener('click', calcRetangulo)

const limparRetangulo = document.getElementById("limparRetangulo");
    limparRetangulo.addEventListener('click', limpaRetangulo)

function calcRetangulo() {
    // Captura os valores dos inputs
    let baseRetangulo = document.getElementById('baseRetangulo').value;
    let alturaRetangulo = document.getElementById("alturaRetangulo").value;
    
    if (baseRetangulo == "" || alturaRetangulo == ""){
        window.alert("um dos campos esta em branco")
    }else if (isNaN(baseRetangulo) || isNaN(alturaRetangulo)){
        window.alert("apenas numeros são permitidos")
    }else{
        area = baseRetangulo * alturaRetangulo;
        document.getElementById('resultadoRetangulo').innerText = `a area é ${area}`;
    }

}

function limpaRetangulo(){
    document.getElementById('resultadoRetangulo').innerText = "";
}



    //operações com quadrado 

const calcularQuadrado = document.getElementById('calcularQuadrado');
    calcularQuadrado.addEventListener('click', calcQuadrado);

    function calcQuadrado(){
        let lado = document.getElementById('lado').value;
        if (lado == "") {
            window.alert("o campo lado está vazio")        
        }else if(isNaN(lado)){
            window.alert("o campo so aceita numeros")
        }else{
            area = lado*lado;
            document.getElementById('resultadoQuadrado').innerText = area;
        }
    }


    //operações do corpo da pagina com efeitos 


    const famoon = document.getElementById("fa-moon").addEventListener("click", dark)

   function dark(){
    let dark = document.querySelector('.body');
    dark.classList.add('dark')
   }