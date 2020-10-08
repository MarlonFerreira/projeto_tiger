'use strict'
const ClienteSchema = require('../../db/strategies/mysql/schemas/clienteSchema')
const DefineModelMysqlsHelper = require('../../helpers/defineModelMysqlHelper')

var controllers = {

    getAll: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ClienteSchema)
        let result = await _context.read({}, req.query.skip, req.query.limit)

        if (Object.keys(result).length === 0)
            return res.send('Nenhum cliente encontrado')
        return res.send(result)
    },

    getOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ClienteSchema)
        let result = await _context.read({ cliente_id: req.params.slug })

        if (Object.keys(result).length === 0)
            return res.send('Cliente nao encontrado')
        return res.send(result)
    },

    postOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ClienteSchema)

        await _context.create(req.body)
        return res.json({ message: "Cliente salvo com sucesso" })
    },

    deleteOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ClienteSchema)

        if (await _context.delete(req.query) !== 1)
            return res.send('ID nao encontrado no banco')

        return res.json({ message: "Cliente deletado com sucesso" })

    },

    patchOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ClienteSchema)
        let result = await _context.update({ cliente_id: req.body.cliente_id }, req.body)

        if (result[0] !== 1)
            return res.status(500).send('Nao foi possivel atualizar o cliente - Dados invalidos')

        return res.json({ message: "Cliente atualizado com sucesso" })
    }

}

module.exports = controllers