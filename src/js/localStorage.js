
const salvarDados = (codigo, descricao, data, cpf, nome, quantidade, preco, total) => {
  try {
    const pegarLocalStorage = localStorage.getItem('itens');
    const notasVetor = JSON.parse(pegarLocalStorage) || [];
    notasVetor.push({ codigo, descricao, data, cpf, nome, quantidade, preco, total });
    const JSONvetorNotas = JSON.stringify(notasVetor);
    localStorage.setItem('itens', JSONvetorNotas);
  } catch (erro) {
    console.error('NEM DADO SALVO')
    localStorage.clear();
    return []
  }
}

const pegarVetor = () => {
  try {
    const pegarLocalStorage = localStorage.getItem('itens');
    const notasVetor = JSON.parse(pegarLocalStorage) || [];
    return notasVetor;
  } catch (error) {
    console.error('NEM UM VETOR ENCONTRADO');
    return [];
  }
}

const exibirDadosSalvos = (exibirNotas) => {
  const vetorNotas = pegarVetor();
  exibirNotas.innerHTML = "";
  vetorNotas.forEach(({ codigo, descricao, data, cpf, nome, quantidade, preco, total }, index) => {
    exibirNotas.innerHTML += `<div class="nota">
        <p>${codigo}</p>
        <p>${descricao}</p>
        <p>${data}</p>
        <p>${cpf}</p>
        <p>${nome}</p>
        <p>${quantidade}</p>
        <p><span>R$</span>${preco}</p>
        <p><span>R$</span>${total}</p>
        <div class="btn-nota">
          <button class="alterar" data-id="${index}"><i><img src="./assets/icons/alterar.png" alt="Criar Nota"></i></button>
          <button class="baixar" data-id="<${index}"><img src="./assets/icons/baixar.png" alt="Criar Nota"></i></button>
          <button class="deletar" data-id="${index}"><i><img src="./assets/icons/deletar.png" alt="Criar Nota"></i></button>
        </div>
      </div>`
  });
}