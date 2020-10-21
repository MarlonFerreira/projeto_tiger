const clienteSchema = require('./../../db/strategies/mysql/schemas/clienteSchema')
const DefineModelMysqlHelper = require('../../helpers//defineModelMysqlHelper')
const { compare } = require('bcrypt')
const jwt = require('jsonwebtoken')

var controller = {

    postOne: async function (req, res) {
        let _context = await DefineModelMysqlHelper.defineModelContext(clienteSchema)
        console.log('ENTROU', req.body)
        let result = await _context.read({ cliente_email: req.body.login, cliente_status: true })
        if (Object.keys(result).length === 0) {
            return res.status(400).send('Usuario ou senha invalidos')
        }
        let _cliente_id = result[0].cliente_id
        let _cliente_role = result[0].role
        let _cliente_nome = result[0].cliente_nome

        compare(req.body.senha, result[0].cliente_senha, function (err, result) {
            if (err)
                throw err
            if (result == true) {
                let token = jwt.sign({ cliente_id: _cliente_id, role: _cliente_role }, process.env.SECRET);

                // res.cookie('acess_token', token, {
                //     maxAge: 900000,
                //     httpOnly: true,
                //     // secure: true
                // });
                console.log('SAIU')
                console.log('------')
                return res.status(200).send({ token: token, nome: _cliente_nome, auth: true })
                // console.log(res)
                // return res.status(200).end()


            } else {
                return res.status(400).send('Usuario ou senha invalidos')
            }
        })
    }
}

module.exports = controller