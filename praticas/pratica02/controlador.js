const Contato = require("./modelo");

const contatos = [];

function adicionarContato(nome, email, telefone) {
  const novoContato = new Contato(nome, email, telefone);
  contatos.push(novoContato);
}

function listarContato() {
  contatos.forEach((contato) =>
    console.log(
      `Nome: ${contato.nome}, Email: ${contato.email}, Telefone: ${contato.telefone}`
    )
  );
}

function buscarContato(nome) {
  const contatoFind = contatos.find((contato) => contato.nome === nome);
  return contatoFind;
}

function atualizarContato(nome, email, telefone) {
  const contatoAtt = buscarContato(nome);
  if (contatoAtt !== null) {
    contatoAtt.nome = nome;
    contatoAtt.email = email;
    contatoAtt.telefone = telefone;
  }
}

function removerContato(nome) {
  const contatoIndex = contatos.findIndex((contato) => contato.nome === nome);
  if (contatoIndex !== -1) {
    contatos.splice(contatoIndex, 1);
  }
}

module.exports = {
  adicionarContato,
  listarContato,
  buscarContato,
  atualizarContato,
  removerContato,
};
