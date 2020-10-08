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
        pedido_itens_desconto_adicional: {
            type: Sequelize.DOUBLE,
            require: true,
            default: 0
        },
        preco_total_item: {
            type: Sequelize.DOUBLE,
            require: true,
        },
        frete_unitario_item: {
            type: Sequelize.STRING,
            require: true,
        },
        pedido_itens_detalhes: {
            type: Sequelize.STRING,
            require: true,
        },
        pedido_itens_preco_final_item: {
            type: Sequelize.STRING,
            require: true,
        },
        pedido_itens_criado_em: {
            type: Sequelize.DATE,
            require: true,
            defaultValue: new Date()
        },
    },
    options: {
        tableName: 'tab_pedidoItens',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = PedidoItensSchema