

// seta o numero máximo que pode ser escolhido
let numeroMaximo = 10;

//pega o numero aleatorio
let numeroAleatorio = Math.trunc(Math.random() * 10 + 1);

//declara uma variavel que identifica a tag do html nesse caso o h1
let titulo = document.querySelector('h1');
//pega a variavel declarada e insere no html manipulando a tag selecionada na variavel declarada, nesse caso a variavel titulo se refere a seleção da tag <h1> como descrito na variavel titulo
titulo.innerHTML = 'Jogo do número secreto';

//declara uma variavel que identifica a tag do html nesse caso o p
let textoParagrafo = document.querySelector('p');
//pega a variavel declarada e insere no html manipulando a tag selecionada na variavel declarada, nesse caso a variavel textoParagrafo se refere a seleção da tag <p> como descrito na variavel textoParagrafo
textoParagrafo.innerHTML = `Escolha um numero entre 0 e ${numeroMaximo}`;

//função para gerar números pseudo-aleatorios
function geraNumeroAleatorio() {
    console.log(Math.trunc(Math.random() * 10 + 1));    
}

function verificarChute() {
    console.log(Math.trunc(Math.random() * 10 + 1));
}







