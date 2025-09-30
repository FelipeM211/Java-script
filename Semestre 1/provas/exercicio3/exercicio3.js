const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
readLine.question('Digite um número: ', (numero)=>{
    const numeros = parseInt(numero)
    if (numeros >= 1){
        console.log('Seu número é positivo!');
    } else if (numero == 0){
        console.log('Seu número é o zero!');
    } else {
        console.log('Seu número é negativo')
    }
readLine.close();
})
