console.log("Scipt externo rodando para o DOM")

const tituloElemento = document.getElementById('tituloDinamico');//seleciona o elemento <h2> pelo seu ID//
tituloElemento.textContent = "Texto alterado para JavaScipt"; //Altera o texto do <h2>
tituloElemento.style.color = 'green'; //Alterando a cor do texto

const botaoElemento = document.getElementById('meuBotao');
botaoElemento.addEventListener('click', function() {
    alert('botão foi clicado');
})