const inputDrescricao = document.querySelector('.descricao');
const inputData = document.querySelector('.data');
const inputCpfInput = document.querySelector('.cpf');
const inputNome = document.querySelector('.nome');
const inputQuantidade = document.querySelector('.quantidade');
const inputPreco = document.querySelector('.preco');



document.addEventListener('click', (e) => {
  const el = e.target
  if (el.classList.contains('criarNota')) {

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



