// Armazena o id da tabela
let tabelaLivros = document.querySelector('#livros');

// Adiciona evento de click na tabela
tabelaLivros.addEventListener('click', (evento) => {
    
    // Armazena o target do click
    let elementoClicado = evento.target;

    // Verifica se o target do click foi o de remoção de item
    if (elementoClicado.dataset.type == 'remocao') {

        // Pega o id do livro
        let livroId = elementoClicado.dataset.ref;

        // Busca a endpoint para deletar o livro parametrizado
        fetch(`http://localhost:3001/livros/${livroId}`, { method: 'DELETE' })
            .then((resposta) => {
                // Se houver resposta, remove o item da tabela
                let tr = elementoClicado.closest(`#livro_${livroId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});