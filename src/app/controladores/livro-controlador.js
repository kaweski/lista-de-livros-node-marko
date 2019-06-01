const { validationResult } = require('express-validator/check');
const LivroDao = require('../infra/livro-dao');
const UsuarioDao = require('../infra/usuario-dao');
const db = require('../../config/database');
const templates = require('../views/templates');

class LivroControlador {

    /**
     * Método que possui objeto de rotas referentes a Livros
     */
    static rotas() {
        return {
            autenticadas: '/livros*',
            lista: '/livros',
            cadastro: '/livros/form',
            edicao: '/livros/form/:id',
            delecao: '/livros/:id'
        };
    }

    /**
     * Método que lista os livros de um usuário
     */
    lista() {
        return function(req, resp) {
            const usuarioDao = new UsuarioDao(db);
            const livroDao = new LivroDao(db);

            usuarioDao.buscaPorEmail(req.user.email)
                .then((usuario) => {
                    livroDao.lista(usuario.id)
                        .then(livros => {
                            resp.marko(
                                templates.livros.lista,
                                { livros: livros }
                            )
                        })
                        .catch(erro => console.log(erro));
                })
                .catch(erro => console.log(erro));
        };
    }

    /**
     * Método que exibe o formulário de cadastro com os dados do formulário limpos.
     */
    formularioCadastro() {
        return function(req, resp) {
            resp.marko(templates.livros.form, { livro: {} });
        };
    }

    /**
     * Método que exibe o formulário de edição com os dados do livro selecionado.
     */
    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const livroDao = new LivroDao(db);
            livroDao.buscaPorId(id)
                .then(livro => 
                    resp.marko(
                        templates.livros.form, 
                        { livro: livro }
                    )
                )
                .catch(erro => console.log(erro));
        };
    }

    /**
     * Método que cadastra um novo livro
     */
    cadastra() {
        return function(req, resp) {
            const livroDao = new LivroDao(db);
            const usuarioDao = new UsuarioDao(db);
            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return resp.marko(
                    templates.livros.form,
                    { 
                        livro: {}, 
                        errosValidacao: erros.array()
                    }
                );
            }

            usuarioDao.buscaPorEmail(req.user.email)
                .then((usuario) => {
                    const livro = {
                        ...req.body, 
                        id_usuario: usuario.id
                    };
                    livroDao.adiciona(livro)
                        .then(resp.redirect(LivroControlador.rotas().lista))
                        .catch(erro => console.log(erro));
                })
                .catch(erro => console.log(erro));
        };
    }

    /**
     * Método que edita um livro
     */
    edita() {
        return function(req, resp) {
            const livroDao = new LivroDao(db);
            livroDao.atualiza(req.body)
                .then(resp.redirect(LivroControlador.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    /**
     * Método que remove um livro da lista
     */
    remove() {
        return function(req, resp) {
            const id = req.params.id;
            const livroDao = new LivroDao(db);
            livroDao.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
        };
    }
}

module.exports = LivroControlador;