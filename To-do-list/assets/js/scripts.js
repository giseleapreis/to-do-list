const tarefasListadas = document.getElementById("lista-tarefas");
const resetForm = document.getElementById("tarefa")

var adicionarTarefa = document.getElementsByName("adicionar")[0];
adicionarTarefa.addEventListener("click", increment);

document.addEventListener("keypress", function(e) {
	if(e.key === 'Enter') {
	
		var btn = document.querySelector("#submit");
	  
	  btn.click();
	
	}
  });

function increment(){
    
    var entradaTarefa = document.getElementById("tarefa").value;
    const containerTarefas = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const textoTarefa = document.createElement('label');
	const descricao = document.createTextNode(entradaTarefa);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', entradaTarefa);
	novaTarefa.setAttribute('id', entradaTarefa);
    novaTarefa.setAttribute('class', 'chk');

	textoTarefa.setAttribute('for', entradaTarefa);
	textoTarefa.appendChild(descricao);

	containerTarefas.classList.add('item-tarefa');
	containerTarefas.appendChild(novaTarefa);
	containerTarefas.appendChild(textoTarefa);

	tarefasListadas.appendChild(containerTarefas);

    document.getElementById ("tarefa").value = ""

}

