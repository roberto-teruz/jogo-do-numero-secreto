let  listaDeNumerosSorteados = [];
// seta o número máximo que pode ser escolhido
let numeroMaximo = 100;

let tentativas = 1;

//pega o numero aleatório
let numeroSecreto = geraNumeroAleatorio();

//Função para os textos com parâmetros Tag que identifica a tag HTML para seleção e o texto que será inserido nessa tag
function exibirTextoNaTela(tag, texto) {
    //aqui selecionamos a Tag html
    let campo = document.querySelector(tag);
    //Aqui enviamos o texto que deve ser inserido na tag do html
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicialNaTela() {
    //Chamamos a função e informamos a tag desejada no primeiro exemplo é o <h1> informando o primeiro parâmetro da função e na sequência excrevemos o texto que sera inserido na tag selecionada completando o segundo parâmetro
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 0 e ${numeroMaximo}`);
}

exibirMensagemInicialNaTela();


//função para gerar números pseudo-aleatórios
function geraNumeroAleatorio() {
    //variável para gerar um numero aleatório
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1); 
    //conta a quantidade total de números na listaDeNumerosSorteados
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }
    //se na lista de números sorteados estiver (incudes) o numero aleatório gerado na variável numeroEscolhido retorna para gerar outro número aleatório
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        //envia para tornar a gerar um novo numero aleatorio até que encontre um que não está na listaDeNumerosSorteados
        return geraNumeroAleatorio();
    }   else {
        //do contrario pega o número aleatório escolhido e envia para listaDeNumerosSorteados
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        //e também retorna como número escolhido
        return numeroEscolhido;
    }
}

//função para ação do botão Chutar que vai verificar o chute do usuário
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${mensagemTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou');
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela('h1', 'Errou');
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }  
        tentativas++;
        limparCampo();

             
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
} 

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicialNaTela();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}









