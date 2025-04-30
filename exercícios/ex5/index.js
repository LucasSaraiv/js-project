function calcular() {
    // Obter os valores dos inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar se os valores são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        window.alert("Por favor, insira números válidos.");
        return; // Não prosseguir com o cálculo se os valores forem inválidos
    }

    // Calcular a soma
    const soma = numero1 + numero2;
        if(soma>100){
            document.getElementById('resultado').value = soma;
        }
        else{
            window.alert("numero menor que 100 por favor disgite outros valores")
        }

    // Exibir o resultado no campo 'resultado'
   const botao=document.getElementById('botao');
   botao.addEventListener(' clik')
}