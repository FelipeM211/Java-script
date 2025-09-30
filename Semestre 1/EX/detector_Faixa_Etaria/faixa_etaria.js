const idade = document.getElementById('numero')
const meubotao = document.getElementById('botao')
const textofaixa = document.getElementById('texto')

meubotao.addEventListener('click', function (){
    let faixa = parseInt(idade.value);
    if (faixa < 18){
        textofaixa.textContent = "Voce e uma crianca!";
    } else if (faixa <= 60 && faixa >=18){
        textofaixa.textContent = "Voce e um adulto!";
    } else {
        textofaixa.textContent = "Voce e um idoso!";
    }
})