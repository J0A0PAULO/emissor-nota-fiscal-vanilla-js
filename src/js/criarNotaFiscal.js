

const codigo = Date.now();
const drescricao = document.querySelector('.descricao');
const data = document.querySelector('.data');
const cpfInput = document.querySelector('.cpf');
const nome = document.querySelector('.nome');
const quantidade = document.querySelector('.quantidade');
const preco = document.querySelector('.preco');

const inputValor = (input) => {
  const valor = input.value;
  return valor;
}

const total = (quantidade, preco) => {
  const total = quantidade * preco;
  const valorFinal = total - ((10 / 100) * total);
  return valorFinal;
}

const formatarData = (data) => {
  const dataFormatada = data.slice(0, 2) + '/' + data.slice(2, 4) + '/' + data.slice(4)
  return dataFormatada;
}

const formatarCpf = (cpf) => {
  const cpfFormatado = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);
  return cpfFormatado;
}

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.closest('button')) {
    console.log('clicou');
  }
});

window.cpf