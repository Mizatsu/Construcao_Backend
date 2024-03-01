const readline = require("readline-sync");

const contatoControlador = require("./controlador");

function menu() {
  console.log("1. Adicionar contato");
  console.log("2. Listar contatos");
  console.log("3. Buscar contato");
  console.log("4. Atualizar contato");
  console.log("5. Remover contato");
  console.log("6. Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      let newNome = readline.question("Insira o nome do contato:");
      let newEmail = readline.question("Insira o email do contato:");
      let newTelefone = readline.question("Insira o telefone do contato:");
      contatoControlador.adicionarContato(newNome, newEmail, newTelefone);
      break;
    case "2":
      contatoControlador.listarContato();
      break;
    case "3":
      let contatoNome = readline.question("Insira o nome do contato: ");
      let contatoFound = contatoControlador.buscarContato(contatoNome);
      console.log(`Nome: ${contatoFound.nome}, Email: ${contatoFound.email}, Telefone: ${contatoFound.telefone}`)
      break;
    case "4":
      let nomeEdit = readline.question("Insira o nome do contato:");
      let emailEdit = readline.question("Insira o novo email do contato:");
      let telefoneEdit = readline.question(
        "Insira o novo telefone do contato:"
      );
      contatoControlador.atualizarContato(nomeEdit, emailEdit, telefoneEdit);
      break;
    case "5":
      let nomeRemove = readline.question("Digite o nome do contato a ser removido: ");
      contatoControlador.removerContato(nomeRemove);
      break;
    case "6":
      console.log("Encerrando processo.");
      process.exit(0);
    default:
      console.log("Opção inválida.");
  }
}

function main() {
    while(true){
        menu();
        opcaoSelect = readline.question("Informe a opção desejada: ");
        escolherOpcao(opcaoSelect)
    }
}

main()