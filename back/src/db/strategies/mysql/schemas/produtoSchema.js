const Sequelize = require('sequelize')

const ProdutoSchema = {
    name: 'tab_produtos',
    schema: {
        produto_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        produto_nome: {
            type: Sequelize.STRING,
            require: true,
        },
        produto_detalhes: {
            type: Sequelize.STRING,
            require: true,
        },
        produto_imagem: {
            type: Sequelize.STRING,
        },
        produto_slug: {
            type: Sequelize.STRING,
        },
        produto_preco_venda: {
            type: Sequelize.DOUBLE,
            require: true,
            defaultValue: 0
        },
        produto_preco_real: {
            type: Sequelize.DOUBLE,
            require: true,
            defaultValue: 0
        },
        produto_preco_desconto: {
            type: Sequelize.DOUBLE,
            require: true,
            defaultValue: 0
        },
        produto_categoria_id: {
            type: Sequelize.INTEGER,
            require: true,
            references: {
                model: 'tab_categorias',
                key: 'categoria_id'
              }
        },
        produto_quantidade: {
            type: Sequelize.INTEGER,
            require: true,
            defaultValue: 0
        },
        produto_status: {
            type: Sequelize.BOOLEAN,
            require: true,
            defaultValue: true
        },
        produto_criado_em: {
            type: Sequelize.DATE,
            require: true,
            defaultValue: new Date()
        },
    },
    options: {
        tableName: 'tab_produtos',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = ProdutoSchema