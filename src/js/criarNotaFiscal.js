const inputDrescricao = document.querySelector('.descricao');
const inputData = document.querySelector('.data');
const inputCpfInput = document.querySelector('.cpf');
const inputNome = document.querySelector('.nome');
const inputQuantidade = document.querySelector('.quantidade');
const inputPreco = document.querySelector('.preco');

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
  const dataFormatada = data.slice(0, 2) + '/' + data.slice(2, 4) + '/' + data.slice(4);
  return dataFormatada;
}

const formatarCpf = (cpf) => {
  const cpfFormatado = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);
  return cpfFormatado;
}

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.closest('button')) {

    if (!isNaN(inputDrescricao.value) || inputDrescricao.value === "") return;
    if (!isNaN(inputNome.value) || inputNome.value === "") return;
    if (isNaN(inputData.value) || inputData.value === "") return;
    if (isNaN(inputCpfInput.value) || inputCpfInput.value === "") return;
    if (isNaN(inputQuantidade.value) || inputQuantidade.value === "") return;
    if (isNaN(inputPreco.value) || inputPreco === "") return;

    const codigo = Date.now().toString().slice(-5);
    const DescricaoProduto = inputValor(inputDrescricao).toUpperCase();
    const dataFormatada = formatarData(inputValor(inputData));
    const cpfFOrmatado = formatarCpf(inputValor(inputCpfInput));
    const nome = inputValor(inputNome).toUpperCase();
    const quantidade = parseFloat(inputValor(inputQuantidade));
    const preco = parseFloat(inputValor(inputPreco));
    const resultadoTotal = total(quantidade, preco);

    salvarDados(
      codigo,
      DescricaoProduto,
      dataFormatada,
      cpfFOrmatado,
      nome,
      quantidade,
      preco,
      resultadoTotal,
    );

    window.location.href = './paginaInicial.html';

    console.log(codigo);
    console.log(DescricaoProduto);
    console.log(dataFormatada);
    console.log(cpfFOrmatado);
    console.log(nome);
    console.log(quantidade);
    console.log(preco);
    console.log(preco);

  }
});

