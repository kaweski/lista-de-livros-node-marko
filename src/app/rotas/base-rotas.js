const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();
const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();

    // Vinculação de rotas às estruturas do Marko e métodos controladores
    app.get(rotasBase.home, livroControlador.lista());

    app.route(rotasBase.login)
        .get(baseControlador.login())
        .post(baseControlador.efetuaLogin());
};