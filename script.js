
const senhaSecreta = [
    'azul', 'amarelo', 'amarelo', 'vermelho', 'azul',
    'verde', 'amarelo', 'vermelho', 'verde', 'vermelho'
];

const tentativaAtual = document.getElementById('tentativaAtual');
const resultado = document.getElementById('resultado');
const painel = document.getElementById('painelSenha');
let tentativa = [];

function adicionarCor(cor) {
    if (tentativa.length < senhaSecreta.length) {
    tentativa.push(cor);
    atualizarTentativa();

    if (tentativa.length === senhaSecreta.length) {
        painel.style.pointerEvents = 'none';
        resultado.textContent = 'Verificando...';
        setTimeout(() => {
        verificarSenha();
        }, 5000); // espera 5 segundos para verificar erro ou acerto
    }
    }
}

function atualizarTentativa() {
    tentativaAtual.innerHTML = '';
    tentativa.forEach(cor => {
    const cubo = document.createElement('div');
    cubo.classList.add('cubo', cor);
    tentativaAtual.appendChild(cubo);
    });
}

function verificarSenha() {
    const correta = tentativa.every((cor, i) => cor === senhaSecreta[i]);

    if (correta) {
    setTimeout(() => {
        exibirLiberacao();
    }, 5000); // aguarda 5s antes de mostrar liberação (total 10s desde o fim da entrada)
    } else {
    mostrarErro();
    }
}

function mostrarErro() {
    const telaErro = document.createElement('div');
    telaErro.classList.add('tela-erro');

    const textoErro = document.createElement('div');
    textoErro.classList.add('texto-erro');
    textoErro.textContent = 'Ops... +1 selo para você!';

    telaErro.appendChild(textoErro);
    document.body.appendChild(telaErro);

    setTimeout(() => {
    tentativa = [];
    atualizarTentativa();
    resultado.textContent = '';
    painel.style.pointerEvents = 'auto';
    document.body.removeChild(telaErro);
    }, 2500);
}

function exibirLiberacao() {
    painel.style.display = 'none';

    const tela = document.createElement('div');
    tela.classList.add('tela-liberada');

    const texto = document.createElement('div');
    texto.classList.add('texto-liberado');
    texto.textContent = 'SALA 2 LIBERADA!';

    tela.appendChild(texto);
    document.body.appendChild(tela);
}