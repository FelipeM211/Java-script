const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
readLine.question('Que horas são? ', (horaDefinida) =>{
    const horas = parseInt(horaDefinida)
    if (horas >= 6 && horas <= 12){
        console.log('Bom dia!');
    }else if (horas > 12 && horas <= 18){
        console.log('Boa tarde!');
    }else {
        console.log('Boa noite!')
    }
readLine.close();
})
