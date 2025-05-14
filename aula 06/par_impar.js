//vamos importar o modulo "readline" para interagir com a entrada e saida do terminal
const readline = require('readline').createInterface({
    input: process.stdin, //define a entrada como o fluxo de entrada padrão (teclado)
    output: process.stdout, //define a saida como o fluxo de saida padrão(terminal)

});

//exibe uma pergunta no terinal e espera pela resposta do usuario
readline.question('Digite um numero: ', (numeroDigitado) => {
    // converte a entrada do usuario (que é uma string) para um numero inteiro
    const numero = parseInt(numeroDigitado);

    //verifica se a converção para o numero inteiro foi bem sucedida
    if (!isNaN(numero)) {
        //se o numero for divisivel por 2 (o resto da divisão é 0), ele é par
        if (numero % 2 == 0) {
            console.log(`O numero ${numero} é par`);
        } else {
            console.log(`O Numero ${numero} é impar`);
        }
    } else {
        console.log(`O valor de entrada não é um inteiro...`);
    }
    readline.close();
});