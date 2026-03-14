const exibirNota = document.querySelector('.exibirNota')

document.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el)
  if (el.closest('.btn-criarNota')) {
    console.log('clicou aqui')
    location.href = 'criarNotaFiscal.html';
  }
});

exibirDadosSalvos(exibirNota);