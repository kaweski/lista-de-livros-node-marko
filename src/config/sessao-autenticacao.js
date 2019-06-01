const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/infra/usuario-dao');
const db = require('./database');

module.exports = (app) => {

    // Configuração da sessão e da autenticação.
    passport.use(new LocalStrategy(
        {
            usernameField: 'email', // Campo de name email do formulário de login
            passwordField: 'senha' // Campo de name email do formulário de senha
        },
        (email, senha, done) => {
            const usuarioDao = new UsuarioDao(db);
            usuarioDao.buscaPorEmail(email)
                .then((usuario) => {
                    // Se o usuário não existir no banco
                    if (!usuario || senha != usuario.senha) {
                        return done(null, false, {
                            mensagem: 'Login e senha incorretos!'
                        });
                    }
                    return done(null, usuario);
                })
                .catch(erro => done(erro, false));
        }
    ));

    // Serializa o usuário parametrizado
    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            nome: usuario.nome_completo,
            email: usuario.email
        };
        done(null, usuarioSessao);
    });

    // Método que deserializa o usuário, removendo sua sessão
    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    // Cria sessão com o id gerado a partir da função uuid()
    app.use(sessao({
        secret: 'node alura',
        genid: function(req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    // Inicializa o passaport para o usuário autenticado
    // Inicializa a sessão do usuário autenticado
    app.use(passport.initialize());
    app.use(passport.session());

    // Injeção de dependência do passaport gerado
    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
};