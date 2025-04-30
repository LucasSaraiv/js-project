function converte(){
    const temfire = document.getElementById('temfire').value;
      if(!isNaN(temfire)){
        const fireCelsius = parseFloat(((temfire - 32 ) * 5 ) / 9);
        document.getElementById("resultado").value= fireCelsius.toFixed(2);
      }
      else{
        window.alert("digite um numero valido")
      }
         
} 
  