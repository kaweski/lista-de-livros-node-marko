const LivroControlador = require('./livro-controlador');
const templates = require('../views/templates');

class BaseControlador {

    /**
     * Método que retorna um objeto contendo as rotas base do site.
     */
    static rotas() {
        return {
            home: '/',
            login: '/login'
        };
    }

    /**
     * Método que retorna a estrutura da home
     */
    home() {
        return function(req, resp) {
            resp.marko(templates.base.home);
        };
    }

    /**
     * Método que retorna a estrutura do login
     */
    login() {
        return function(req, resp) {
            resp.marko(templates.base.login);
        };
    }

    /**
     * Método que efetua o login do usuário.
     */
    efetuaLogin() {
        return function(req, resp, next) {
            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {

                if (info) {
                    return resp.marko(
                        templates.base.login,
                        {mensagem: info.mensagem}
                    );
                }
                if (erro) return next(erro);

                req.login(usuario, (erro) => {
                    if (erro) return next(erro);
                    return resp.redirect(LivroControlador.rotas().lista);
                });

            })(req, resp, next);
        };
    }
}

module.exports = BaseControlador;