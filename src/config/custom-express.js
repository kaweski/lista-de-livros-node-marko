// Marko
require('marko/node-require').install();
require('marko/express');

// Express: Biblioteca para trabalhar com o protocolo http
const express = require('express');
const app = express();

// Importação da biblioteca de tratamento de requisições
const bodyParser = require('body-parser');

// Importação da biblioteza de sobrescrição métodos HTTP
const methodOverride = require('method-override');

// Importação da nossa classe que cuida dos diretórios de arquivos Marko
const templates = require('../app/views/templates');

// Recurso estático da nossa aplicação.
// Sempre que será feito uma requisição pelo /estatico vai disponibilizar os
// arquivos estão dentro do src/app/public
app.use('/estatico', express.static('src/app/public'));

// Habilitado de receber objetos completos no formato json
app.use(bodyParser.urlencoded({
    extended: true
}));

// Sobrescreve métodos HTTP
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// Importação e inicialização do componente de autenticação
const sessaoAutenticacao = require('./sessao-autenticacao');
sessaoAutenticacao(app);

// Importação do arquivo de definição de rotas
const rotas = require('../app/rotas/rotas');
rotas(app);

// Criação do middleware de tratamento de erros 404
app.use(function (req, resp, next) {
    return resp.status(404).marko(
        templates.base.erro404
    );
});

// Criação do middleware de tratamento de erros 500
app.use(function (erro, req, resp, next) {
    return resp.status(500).marko(
        templates.base.erro500
    );
});

module.exports = app;