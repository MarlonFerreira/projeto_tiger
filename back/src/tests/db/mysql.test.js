const assert = require('assert')
const MySql = require('../../db/strategies/mysql/mysql')
const Context = require('../../db/strategies/base/contextStrategy')
const variavelAmbiente = require('../../helpers/variavelAmbienteHelper')

const ProdutosSchema = require('../../db/strategies/mysql/schemas/produtoSchema')
const PedidoItensSchema = require('../../db/strategies/mysql/schemas/pedidoItensSchema')
const PedidosSchema = require('../../db/strategies/mysql/schemas/pedidoSchema')
const ClienteSchema = require('../../db/strategies/mysql/schemas/clienteSchema')
const CategoriaSchema = require('../../db/strategies/mysql/schemas/categoriaSchema')

let connection = {}

const MOCK_PRODUTO_CADASTRAR = {
    produto_categoria_id: 0,
    produto_nome: 'Camiseta TESTE',
    produto_preco: 2.50,
    produto_detalhes: 'Branca TESTE'
}

const MOCK_PRODUTO_MULTI_USO = {
    produto_categoria_id: 9999,
    produto_nome: 'Bota MULTI USO',
    produto_preco: 10.5,
    produto_detalhes: 'pRETA MULTI USO'
}

const MOCK_PRODUTO_ATUALIZAR = {
    produto_categoria_id: 0,
    produto_nome: 'Camiseta TESTE ATUALIZADA',
    produto_preco: 2.50,
    produto_detalhes: 'Branca TESTE ATUALIZADA'
}

const MOCK_CLIENTE_CADASTRAR = {
    cliente_endereco: 'Rua TESTE',
    cliente_telefone: '34335673',
    cliente_email: 'TESTE@TESTE.COM',
    cliente_detalhes: 'TESTE DETALHE'
}

describe('MySql - Clientes', function () {
    this.beforeAll(async function () {
        variavelAmbiente.config()
        connection = await MySql.connect()
    })

    it('Verifica conexao com o MySql', async function () {
        const result = await MySql.isConnected(connection)
        assert.equal(result, true)
    })

    it('MySql - Se nao existir - Cria na tabela Clientes', async function () {
        let model = await MySql.defineModel(connection, ClienteSchema)
        let context = new Context(new MySql(connection, model))
    })

    it('MySql - Se nao existir - Cria na tabela Categoria', async function () {
        let model = await MySql.defineModel(connection, CategoriaSchema)
        let context = new Context(new MySql(connection, model))
    })

    it('MySql - Se nao existir - Cria na tabela Produtos', async function () {
        let model = await MySql.defineModel(connection, ProdutosSchema)
        let context = new Context(new MySql(connection, model))
    })

    it('MySql - Se nao existir - Cria a tabela Pedidos', async function () {
        let model = await MySql.defineModel(connection, PedidosSchema)
        let context = new Context(new MySql(connection, model))
    })

    it('MySql - Se nao existir - Cria a tabela PedidoItens', async function () {
        let model = await MySql.defineModel(connection, PedidoItensSchema)
        let context = new Context(new MySql(connection, model))
    })

    it('MySql - Localiza e lista TODOS os clientes', async function () {
        let model = await MySql.defineModel(connection, ClienteSchema)
        let context = new Context(new MySql(connection, model))
        let result = await context.read({})
    })

    it('MySql - Cria um produto na tabela produtos', async function () {
        let model = await MySql.defineModel(connection, ProdutosSchema)
        let context = new Context(new MySql(connection, model))
        let result = await context.create(MOCK_PRODUTO_CADASTRAR)
        delete result.produto_id
        assert.deepEqual(result, MOCK_PRODUTO_CADASTRAR)
    })

    it('MySql - Localiza um produto na tabela produtos pelos dados completos', async function () {
        let model = await MySql.defineModel(connection, ProdutosSchema)
        let context = new Context(new MySql(connection, model))
        let [result] = await context.read(MOCK_PRODUTO_CADASTRAR)
        delete result.produto_id
        assert.deepEqual(result, MOCK_PRODUTO_CADASTRAR)
    })

    it('MySql - Atualiza um produto na tabela produtos pelo id ', async function () {
        let model = await MySql.defineModel(connection, ProdutosSchema)
        let context = new Context(new MySql(connection, model))
        let [localizar] = await context.read(MOCK_PRODUTO_CADASTRAR)
        let [result] = await context.update({ produto_id: localizar.produto_id }, MOCK_PRODUTO_ATUALIZAR)
        assert.deepEqual(result, true)
    })

    it('MySql - Apaga um produto na tabela produtos pelo id ', async function () {
        let model = await MySql.defineModel(connection, ProdutosSchema)
        let context = new Context(new MySql(connection, model))
        let [localizar] = await context.read(MOCK_PRODUTO_ATUALIZAR)
        let result = await context.delete({ produto_id: localizar.produto_id })
        assert.deepEqual(result, true)
    })

    it('MySql - Cria um produto MULTI USO na tabela produtos', async function () {
        let model = await MySql.defineModel(connection, ProdutosSchema)
        let context = new Context(new MySql(connection, model))
        let result = await context.create(MOCK_PRODUTO_MULTI_USO)
        delete result.produto_id
        assert.deepEqual(result, MOCK_PRODUTO_MULTI_USO)
    })

    it('MySql - Cria um cliente na tabela Clientes', async function(){
        let model = await MySql.defineModel(connection, ClienteSchema)
        let context = new Context(new MySql(connection, model))
        let result = await context.create(MOCK_CLIENTE_CADASTRAR)
        delete result.cliente_id
        assert.deepEqual(result, MOCK_CLIENTE_CADASTRAR)
    })

})