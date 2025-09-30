const meubotao = document.getElementById('botao')
const horaDia = document.getElementById('horario')
const Texto = document.getElementById('texto')

meubotao.addEventListener('click', function(){
    const hora = parseInt(horaDia.value)
    if (hora >= 6 && hora <= 12){
        Texto.textContent = 'Bom dia!';
    }else if (hora > 12 && hora <= 18){
        Texto.textContent = 'Boa tarde!';
    }else {
        Texto.textContent = 'Boa noite!';
    }
})
