class UsuarioDao {

    constructor(db) {
        this._db = db;
    }

    /**
     * Método que retorna usuário a partir do email parametrizado
     * 
     * @param {email} email 
     */
    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM usuarios
                    WHERE email = ?
                `,
                [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    return resolve(usuario);
                }
            )
        });
    }
}

module.exports = UsuarioDao;