const Sequelize = require('sequelize')

const PedidoItensSchema = {
    name: 'tab_pedidoItens',
    schema: {
        pedido_itens_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pedido_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'tab_pedidos',
              key: 'pedido_id'
            }
        },
        produto_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'tab_produtos',
              key: 'produto_id'
            }
        },
        preco_unitario_item: {
            type: Sequelize.DOUBLE,
            require: true,
        },
        quantidade_item: {
            type: Sequelize.INTEGER,
            require: true,
        },
        preco_total_item: {
            type: Sequelize.DOUBLE,
            require: true,
        },
        desconto_item: {
            type: Sequelize.DOUBLE,
            require: true,
        },
        frete_unitario_item: {
            type: Sequelize.STRING,
            require: true,
        },
        item_detalhes: {
            type: Sequelize.STRING,
            require: true,
        },
        preco_final_item: {
            type: Sequelize.STRING,
            require: true,
        },
    },
    options: {
        tableName: 'tab_pedidoItens',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = PedidoItensSchema