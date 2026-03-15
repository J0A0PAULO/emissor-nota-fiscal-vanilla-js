const exibirNota = document.querySelector('.exibirNota');

document.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el)
  if (el.closest('.btn-criarNota')) {
    console.log('clicou aqui')
    location.href = 'criarNotaFiscal.html';
  }
});

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.closest('.alterar')) {
    console.log('clicado', el);
    const index = el.closest('.alterar').getAttribute('data-id');
    location.href = `./alterarNotaFiscal.html?id=${index}`;
  }
});

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.closest('.deletar')) {
    console.log('deletar click');
    const id = parseInt(el.closest('.deletar').dataset.id);
    console.log(id)
    const vetorNOtas = pegarVetor();
    vetorNOtas.splice(id, 1);
    localStorage.setItem('itens', JSON.stringify(vetorNOtas));
    el.closest('.nota').remove();
  }
});


exibirDadosSalvos(exibirNota);
