const DefineModelMysqlHelper = require('../../helpers/defineModelMysqlHelper')
const clienteSchema = require('../../db/strategies//mysql/schemas/clienteSchema')
const { hash } = require('bcrypt');
const salt = 10

var controller = {

    postOne: async function (req, res) {
        console.log(req.body, '2')
        let _context = await DefineModelMysqlHelper.defineModelContext(clienteSchema)
        hash(req.body.senha, salt, async function (err, hash) {
            if(err){
                res.json({ message: "Nao foi possivel criar um novo cliente!!!" })
                throw err
            }

            await _context.create({ cliente_nome: req.body.nome, cliente_email: req.body.email, cliente_senha: hash })
            return res.json({ message: "Cliente salvo com sucesso" })
        })
    }
}

module.exports = controller