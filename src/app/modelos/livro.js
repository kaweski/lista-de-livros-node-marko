const { check } = require('express-validator/check');

class Livro {

    /**
     * Método que validação utilizado pelo validador do express no formulário
     * de cadastro/edição de livro.
     */
    static validacoes() {
        return [
            check('titulo').isLength({ min: 5 }).withMessage('O título precisa ter no mínimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido!')
        ];
    }
}

module.exports = Livro;