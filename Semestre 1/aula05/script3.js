const inputIdade = document.getElementById('IdadeInput');
const botaoVerificar = document.getElementById('verificarIdade');
const resultadoTexto = document.getElementById('resultadoVerificacao')

botaoVerificar.addEventListener('click',function(){
    let idadeDigitada = parseInt(inputIdade.value);
    if(!isNaN(idadeDigitada)) {
    if(idadeDigitada >= 18){
        resultadoTexto.textContent = 'Você é maior de idade';
        resultadoTexto.style.color = 'green';
    }else{
        resultadoTexto.textContent = 'Você é menor de idade';
        resultadoTexto.style.color = 'red';
    }
}else{
    resultadoTexto.textContent = 'Por favor, digite uma idade valida';
    resultadoTexto.style.color = 'orange';
}
})