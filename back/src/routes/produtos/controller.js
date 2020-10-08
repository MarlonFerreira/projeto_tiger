'use strict'
const ProdutoSchema = require('../../db/strategies/mysql/schemas/produtoSchema')
const DefineModelMysqlsHelper = require('../../helpers/defineModelMysqlHelper')

var controllers = {

    getAll: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ProdutoSchema)
        let result = await _context.read({}, req.query.skip, req.query.limit)

        if (Object.keys(result).length === 0)
            return res.send('Nenhum produto encontrado')
        return res.send(result)
    },




    getOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ProdutoSchema)
        let result = await _context.read({ produto_nome: req.params.slug })

        if (Object.keys(result).length === 0)
            return res.send('Produto nao encontrado')
        return res.send(result)
    },




    postOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ProdutoSchema)

        await _context.create(req.body)
        return res.json({ message: "Produto salvo com sucesso" })
    },





    deleteOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ProdutoSchema)

        if (await _context.delete(req.query) !== 1)
            return res.send('ID nao encontrado no banco')

        return res.json({ message: "Produto deletado com sucesso" })

    },





    patchOne: async function (req, res) {
        let _context = await DefineModelMysqlsHelper.defineModelContext(ProdutoSchema)
        let result = await _context.update({ produto_id: req.body.produto_id }, req.body)

        if (result[0] !== 1)
            return res.status(500).send('Nao foi possivel atualizar o produto - Dados invalidos')

        return res.json({ message: "Produto atualizado com sucesso" })
    }

}

module.exports = controllers