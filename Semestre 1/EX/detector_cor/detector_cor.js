const botao = document.getElementById('meubotao')
const cor1 = document.getElementById('cor')
botao.addEventListener('click', function () {
    if (cor1.value != "red"  && cor1.value != "blue" && cor1.value != "green") {
        alert("Escolha uma cor valida")
        return
    }
    let corfundo = cor1.value
    document.body.style.backgroundColor = corfundo;
})