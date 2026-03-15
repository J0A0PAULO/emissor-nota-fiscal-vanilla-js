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

const filtroVazio = (exibir, notasFiltradas) => {
  exibir.innerHTML = `<div class="nota"><h5>nada encontrado</h5></div>`
}

const exibirFiltro = (exibir, notasFiltradas) => {
  exibir.innerHTML = '';
  notasFiltradas.forEach(({ codigo, descricao, data, cpf, nome, quantidade, preco, total }) => {
    exibir.innerHTML += `
    <div class="nota">
        <h5>${codigo}</h5>
        <h5>${descricao}</h5>
        <h5>${data}</h5>
        <h5>${cpf}</h5>
        <h5>${nome}</h5>
        <h5>${quantidade}</h5>
        <h5>${preco}</h5>
        <h5>${total}</h5>
      </div>
    `
  });
}