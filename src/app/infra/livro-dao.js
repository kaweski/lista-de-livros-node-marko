class LivroDao {

    constructor(db) {
        this._db = db;
    }

    /**
     * Método que adiciona um novo livro
     * 
     * @param {livro} livro 
     */
    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo, 
                    preco,
                    descricao,
                    id_usuario
                ) values (?,?,?,?)
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id_usuario
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                }
            )
        });
    }

    /**
     * Método que retorna a lista de livros a partir do id usuário parametrizado.
     * 
     * @param {id do usuário} id_usuario 
     */
    lista(id_usuario) {
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                    SELECT * 
                    FROM livros 
                    WHERE id_usuario = ?
                `,
                [id_usuario],
                (erro, resultados) => {
                    if (erro) {
                        return reject('Não foi possível listar os livros!');
                    }
                    console.log(resultados);
                    return resolve(resultados);
                }
            )
        });
    }

    /**
     * Método que retorna um livro a partir de seu id parametrizado.
     * 
     * @param {id} id 
     */
    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(livro);
                }
            );
        });
    }

    /**
     * Método que atualiza um livro a partir de seus novos dados parametrizados
     * através de um objeto livro.
     * 
     * @param {livro} livro 
     */
    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

    /**
     * Método que remove um livro da lista a partir de seu id parametrizado.
     * 
     * @param {id} id 
     */
    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = LivroDao;