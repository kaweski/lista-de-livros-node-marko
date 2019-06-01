const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();
const Livro = require('../modelos/livro');
const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    const rotasLivro = LivroControlador.rotas();

    // Middleware de autorização de rotas autenticadas
    app.use(rotasLivro.autenticadas, function(req, resp, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    // Vinculação de rotas às estruturas do Marko e métodos controladores
    app.get(rotasLivro.lista, livroControlador.lista());

    app.route(rotasLivro.cadastro)
        .get(livroControlador.formularioCadastro())
        .post(Livro.validacoes(), livroControlador.cadastra())
        .put(livroControlador.edita());

    app.get(rotasLivro.edicao, livroControlador.formularioEdicao());

    app.delete(rotasLivro.delecao, livroControlador.remove());
};