const Sequelize = require('sequelize')

const PedidoSchema = {
    name: 'tab_pedidos',
    schema: {
        pedido_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'tab_clientes',
              key: 'cliente_id'
            }
        },
        pedido_preco: {
            type: Sequelize.STRING,
            require: true,
        },
        pedido_detalhes: {
            type: Sequelize.STRING,
            require: true,
        },
    },
    options: {
        tableName: 'tab_pedidos',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = PedidoSchema