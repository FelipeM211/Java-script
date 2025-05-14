const readline = require('readline').createInterface({
    input: process.stdin, //define a entrada como o fluxo de entrada padrão (teclado)
    output: process.stdout, //define a saida como o fluxo de saida padrão(terminal)

});
//exibe uma pergunta no terinal e espera pela resposta do usuario
readline.question('Digite o valor parcial da compra: ', (numeroDigitado) => {
    // converte a entrada do usuario (que é uma string) para um numero inteiro
    const numero = parseInt(numeroDigitado);
    
    //verifica se a converção para o numero inteiro foi bem sucedida
    if (!isNaN(numero)) {
        if(numero >= 100){
            console.log(`O valor final vai ser de R$ ${numero * 0.9} já com 10% de desconto aplicado`)
        }else{
            console.log(`O valor final da sua compra é R$ ${numero}.`)
        }
    } else {
        console.log(`O valor de entrada não é um inteiro...`);
    }
    readline.close();    
    
})