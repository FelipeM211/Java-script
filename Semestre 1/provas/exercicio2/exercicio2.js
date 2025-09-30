const opeso = document.getElementById('peso')
const Altura = document.getElementById('altura')
const button = document.getElementById('botao')
const Texto = document.getElementById('texto')

button.addEventListener('click', function(){
    const Peso = parseFloat(opeso.value)
    const aAltura = parseFloat(Altura.value)
    const IMC = (Peso / (aAltura * aAltura)).toFixed(2)
    if (IMC <= 18.5){
        Texto.textContent = `seu IMC é de: ${IMC}, voce está abaixo do peso`
    }
    else if (IMC > 18.5 && IMC <= 24.9){
        Texto.textContent = `seu IMC é de: ${IMC}, voce está com peso normal`
    }
    else if (IMC >= 25 && IMC <= 29.9){
        Texto.textContent = `seu IMC é de: ${IMC}, voce está com sobrepeso`
    }
    else if (IMC >= 30 && IMC <= 39.9){
        Texto.textContent = `seu IMC é de: ${IMC}, voce está com obesidade grau 1`
    }else{
        Texto.textContent = `seu IMC é de: ${IMC}, voce está com obesidade grau 2`
    }

});