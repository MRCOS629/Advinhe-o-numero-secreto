let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
let tentativa = 1

function exibirMensagemNaTela(){
exibirTextoNaTela ('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolha um número de 1 a 100');
}

exibirMensagemNaTela()

let tentativas = 1;

function verificarChute() {
    let chute = Number(document.querySelector('input').value);

    if (chute === numeroSecreto) {
        exibirTextoNaTela('p', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {  
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        if (listaDeNumerosSorteados.length === 4) {
            listaDeNumerosSorteados = [];
        }
        return numeroEscolhido;
    }
}

let listaDeCompras = ['fezes', 'mijo']
console.log(listaDeCompras)