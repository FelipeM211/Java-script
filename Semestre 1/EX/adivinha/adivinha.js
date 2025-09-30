const numero = parseInt(Math.random()*10)
const obotao = document.getElementById("botao")
const palpite = document.getElementById("chute")
const mensagem = document.getElementById("texto")

obotao.addEventListener('click', function(){
    palpite1 = parseInt(palpite.value);
    if (palpite1 == numero){
        mensagem.textContent = "Voce ganhou!";
    } else if (palpite1 < numero){
        mensagem.textContent = "O numero correto é maior!";
    } else {
        mensagem.textContent = "O numero correto é menor";
    }
})