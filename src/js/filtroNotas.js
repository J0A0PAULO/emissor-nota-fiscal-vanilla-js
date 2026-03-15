const inputPesquisar = document.querySelector('.input-filtro');
const exibir = document.querySelector('.exibirNota');

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.closest('.pesquisar')) {
    const pesquisar = inputValor(inputPesquisar).toLowerCase();

    const vetorNotas = pegarVetor();

    const notasFiltradas = vetorNotas.filter(
      item => item.nome.toLowerCase().includes(pesquisar)
        || item.descricao.toLowerCase().includes(pesquisar)
        || item.quantidade >= pesquisar);

    exibirFiltro(exibir, notasFiltradas);

    if (notasFiltradas.length === 0) {
      filtroVazio(exibir, notasFiltradas)
    };

    inputPesquisar.value = '';

    console.log('click');
    console.log(pesquisar);
    console.log(notasFiltradas);
  }
});
