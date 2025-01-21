let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Limpa o campo de entrada
function limparCampo() {
    let amigo = document.querySelector('#amigo');
    amigo.value = '';
}

// Adiciona um único amigo na lista
function adicionarAmigo() {
    let amigo = document.querySelector('#amigo').value;

    if (amigo.trim() !== '') {
        amigos.push(amigo); // Adiciona o amigo ao array
        limparCampo();

        // Cria um novo <li> apenas para o último amigo adicionado
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Sorteia um amigo da lista e exibe no resultado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    const indexSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    const amigoSorteado = amigos[indexSorteado]; // Obtém o amigo correspondente

    // Limpa a lista de resultados antes de exibir um novo
    resultado.innerHTML = '';

    // Cria um novo <li> para exibir o amigo sorteado
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}
