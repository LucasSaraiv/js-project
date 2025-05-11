
document.addEventListener('DOMContentLoaded', function() {
    let numero = parseFloat(prompt("Digite um número:"));
    
    if (numero < 2) {
        window.alert("Não é primo");
        return;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            window.alert("Não é primo");
            return;
        }
    }

    window.alert("É primo");
});