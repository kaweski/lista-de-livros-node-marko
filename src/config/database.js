const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Natasha Kaweski', 'naweskil@gmail.com', '123' 
    WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'naweskil@gmail.com')
`;

const INSERIR_USUARIO_2 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Flávio Laper', 'flavio.laper@fumec.br', '123' 
    WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'flavio.laper@fumec.br')
`;

const LIVROS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL, 
    preco REAL NOT NULL,
    descricao TEXT DEFAULT ('') NOT NULL,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)
`;

const INSERIR_LIVRO_1 = 
`
INSERT INTO livros (
    titulo,
    preco,
    descricao,
    id_usuario
) SELECT 'Node na prática', 30.0, 'Como desenvolver com Node.', 1
    WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'Node na prática')
`;

const INSERIR_LIVRO_2 = 
`
INSERT INTO livros (
    titulo, 
    preco,
    descricao,
    id_usuario
) SELECT 'JavaScript na prática', 40.0, 'Como desenvolver com JavaScript.', 1 
    WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'JavaScript na prática')
`;

const INSERIR_LIVRO_3 = 
`
INSERT INTO livros (
    titulo, 
    preco,
    descricao,
    id_usuario
) SELECT 'Senhor dos Anéis', 100.0, 'Teste.', 2 
    WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'Senhor dos Anéis')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(INSERIR_USUARIO_2);
    bd.run(LIVROS_SCHEMA);
    bd.run(INSERIR_LIVRO_1);
    bd.run(INSERIR_LIVRO_2);
    bd.run(INSERIR_LIVRO_3);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        // console.log('Usuario: ');
        // console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;