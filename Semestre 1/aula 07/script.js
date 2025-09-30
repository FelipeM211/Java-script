// for(let i=0;i<5;i++){
//     console.log(`Número: ${i}`);
// }

// let contador = 0;

// while(contador < 3){
//     console.log(`contador esta em: ${contador}`)
//     contador++;
// }

// const pessoa = {
//     nome: 'Ana',
//     idade: 30,
//     cidade: 'São Paulo'
// };

// for(const propriedade in pessoa){
//     console.log(`${propriedade}: ${pessoa [propriedade]}`)
// }

// const cores = ['vermelho','azul','preto']; //criação de um array de cores 

// for(const cor of cores){ //criação de um laço de repetição for...of percorrendo a array
//     console.log(cor);
// }

const resultadoDiv = document.getElementById('resultado')

const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: '2007',
    cor: 'azul',
    ligar: function() {
        console.log('O carro esta ligado!!!')
        exibirMensagemNoNavegador('O carro esta ligado!!!')
    },



obterDetalhes: function(){ //obterDetalhes é um outro metodo
    return `${this.marca} ${this.modelo} (${this.ano})`;
    //this se refere ao objeto 'carro' dentro dos seus métodos 
}
};

console.log('---Objeto Literal---');
console.log(`Marca: ${carro.marca}`); //acessando a propriedade marca usando a notação de ponto
console.log(`Modelo: ${carro['modelo']}`); //acessando a propriedade modelo usando a notação de colchetes 
carro.ligar(); //chamando o método ligar usando a notação de ponto

const detalhesCarro = carro.obterDetalhes();
console.log(`Detalhes do carro: ${detalhesCarro}`); 
exibirMensagemNoNavegador(`Detalhes do carro: ${detalhesCarro}`);

//outra forma de exibir um objeto (converteo objeto para uma string JSON)
const carroJSON = JSON.stringify(carro);//converte o objeto carro no modelo JSON
console.log(`Objeto carro com JSON: ${carroJSON}`);
exibirMensagemNoNavegador(`Objeto carro com JSON: ${carroJSON}`);

//funções construtoras
//Uma função construtora é usada para criar multiplos opjetos com uma unica estrutura
//Usamos a palavra new para invocar um contrutor
function Pessoa(nome,idade,profissao){
    this.nome = nome; // cria uma propriedade 'nome' para o novo objeto e atribui o valor do parametro nome
    this.idade = idade;
    this.profissao = profissao;
    this.saudar = function(){
        console.log(`Olá, meu nome é ${this.nome} e eu sou ${this.profissao}.`);
    }
}

//criando instancias (objetos) da função contrutora Pessoa usando o 'new'.
const pessoa1 = new Pessoa('Carlos', 32, 'Engenheiro de software');
const pessoa2 = new Pessoa('Diego', 18,'Engenheiro de software');

console.log('---funções construtoras---')
console.log(`Nome da pessoa 1 ${pessoa1.nome}`);
pessoa1.saudar();
console.log(`Nome da pessoa 2 ${pessoa2.nome}`);
pessoa2.saudar();

console.log('--Exibindo o Objeto---')
for(const propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`);
    exibirMensagemNoNavegador(`${propriedade}: ${carro[propriedade]}`)
}

function exibirMensagemNoNavegador(mensagem){
    const paragrafo = document.createElement('p');  //cria um novo elemento <p>
    paragrafo.textContent = mensagem; //define o texto do paragrafo com a mensagem
    resultadoDiv.appendChild(paragrafo);  //adiciona o paragrafo elemento 'resultado' no HTML
}