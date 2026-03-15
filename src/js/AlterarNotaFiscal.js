const inputAlterarDrescricao = document.querySelector('.alterarDescricao');
const inputAlterarData = document.querySelector('.alterarData');
const inputAlterarCpf = document.querySelector('.alterarCpf');
const inputAlterarNome = document.querySelector('.alterarNome');
const inputAlterarQuantidade = document.querySelector('.alterarQuantidade');
const inputAlterarPreco = document.querySelector('.alterarPreco');


document.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el);
  if (el.classList.contains('criarNota')) {

    const params = new URLSearchParams(window.location.search);
    const index = params.get('id');

    if (!isNaN(inputAlterarDrescricao.value) || !inputAlterarDrescricao.value) return;
    if (!isNaN(inputAlterarNome.value) || !inputAlterarNome.value) return;
    if (isNaN(inputAlterarData.value) || !inputAlterarData.value) return;
    if (isNaN(inputAlterarCpf.value) || !inputAlterarCpf.value) return;
    if (isNaN(inputAlterarQuantidade.value) || !inputAlterarQuantidade.value) return;
    if (isNaN(inputAlterarPreco.value) || !inputAlterarPreco.value) return;

    const alterarDescricao = inputValor(inputAlterarDrescricao).toUpperCase();
    const alterarData = formatarData(inputValor(inputAlterarData));
    const alterarCpf = formatarCpf(inputValor(inputAlterarCpf));
    const alterarNome = inputValor(inputAlterarNome).toUpperCase();
    const alterarQuantidade = parseFloat(inputValor(inputAlterarQuantidade));
    const alterarPreco = parseFloat(inputValor(inputAlterarPreco));

    const alterarValorTotal = total(alterarQuantidade, alterarPreco);

    const vetorNotas = pegarVetor();

    const notaObjeto = vetorNotas[index];

    const novaNotaAtualizada = {
      codigo: notaObjeto.codigo,
      descricao: alterarDescricao,
      data: alterarData,
      cpf: alterarCpf,
      nome: alterarNome,
      quantidade: alterarQuantidade,
      preco: alterarPreco,
      total: alterarValorTotal
    }

    vetorNotas[index] = novaNotaAtualizada;
    localStorage.setItem('itens', JSON.stringify(vetorNotas));

    location.href = './paginaInicial.html';
  }
});