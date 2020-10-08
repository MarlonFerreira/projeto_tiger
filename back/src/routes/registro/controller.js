const DefineModelMysqlHelper = require('../../helpers/defineModelMysqlHelper')
const clienteSchema = require('../../db/strategies//mysql/schemas/clienteSchema')
const { hash } = require('bcrypt');
const salt = 10

var controller = {

    postOne: async function (req, res) {
        let _context = await DefineModelMysqlHelper.defineModelContext(clienteSchema)
        hash(req.body.cliente_senha, salt, async function (err, hash) {
            if(err){
                res.json({ message: "Nao foi possivel criar um novo cliente!!!" })
                throw err
            }

            await _context.create({ cliente_nome: req.body.cliente_nome, cliente_login: req.body.cliente_login, cliente_senha: hash })
            return res.json({ message: "Cliente salvo com sucesso" })
        })
    }
}

module.exports = controller