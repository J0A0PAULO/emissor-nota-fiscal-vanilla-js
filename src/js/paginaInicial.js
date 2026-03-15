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
})

exibirDadosSalvos(exibirNota);
