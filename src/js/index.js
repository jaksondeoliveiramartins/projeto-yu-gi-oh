/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
    */


const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

cartoes.forEach(cartao => {
  cartao.addEventListener('click', () => {
    const cartaVirada = cartao.querySelector(".carta-virada");
    //virar carta
    cartao.classList.toggle('virar');

    //mostrar o fundo da carta
    cartaVirada.classList.toggle('mostrar-fundo-carta');

    const descricao = cartao.querySelector('.descricao');
    descricao.classList.toggle('esconder');


  })
});


btnAvancar.addEventListener('click', () => {
  if (cartaoAtual === cartoes.length - 1) return;
  cartaoAtual++;
  esconderCartaoSelecionado();
  mostrarCartao(cartaoAtual);
  esconderOuMostrarBtnSeta()
});

btnVoltar.addEventListener('click', () => {
  if (cartaoAtual === 0) return;
  cartaoAtual--;
  esconderCartaoSelecionado();
  mostrarCartao(cartaoAtual);
  esconderOuMostrarBtnSeta();
});
function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado');
}

function esconderOuMostrarBtnSeta() {
  const naoEhUltimoCartao = cartaoAtual !== 0;

  if (naoEhUltimoCartao) {
    btnVoltar.classList.remove('opacidade');
  }
  else {
    btnVoltar.classList.add('opacidade');
  }
  const EhUltimoCartao = cartaoAtual !== 0 && cartaoAtual === cartoes.length - 1;
  if (EhUltimoCartao) {
    btnAvancar.classList.add('opacidade');
  }
  else {
    btnAvancar.classList.remove('opacidade')
  }

}

