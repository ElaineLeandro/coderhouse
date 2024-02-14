let listaDeTarefas = [];


function adicionarTarefa() {
  let inputTarefa = document.getElementById("novaTarefa");
  let novaTarefa = inputTarefa.value;

  if (novaTarefa.trim() !== "") {
    listaDeTarefas.push(novaTarefa);
    inputTarefa.value = "";
    console.log("Tarefa adicionada: " + novaTarefa);
  }
}


function visualizarTarefas() {
  console.log("Lista de Tarefas:");
  for (let i = 0; i < listaDeTarefas.length; i++) {
    console.log(i + 1 + ". " + listaDeTarefas[i]);
  }
}


function limparLista() {
  listaDeTarefas = [];
  console.log("Lista de Tarefas foi limpa.");
}
