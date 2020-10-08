const Sequelize = require('sequelize')

const ClienteSchema = {
    name: 'tab_clientes',
    schema: {
        cliente_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cliente_endereco: {
            type: Sequelize.STRING,
        },
        cliente_telefone: {
            type: Sequelize.STRING,
            require: true
        },
        cliente_email: {
            type: Sequelize.STRING,
            require: true
        },
        cliente_detalhes: {
            type: Sequelize.STRING
        }
    },
    options: {
        tableName: 'tab_clientes',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = ClienteSchema