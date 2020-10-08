const Sequelize = require('sequelize')

const ClienteSchema = {
    name: 'tab_clientes',
    schema: {
        cliente_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cliente_nome: {
            type: Sequelize.STRING
        },
        cliente_slug: {
            type: Sequelize.STRING
        },
        cliente_email: {
            type: Sequelize.STRING,
            unique: true,
            require: true
        },
        cliente_aniversario: {
            type: Sequelize.INTEGER,
            require: true
        },
        cliente_telefone: {
            type: Sequelize.STRING,
            require: true
        },
        cliente_detalhes: {
            type: Sequelize.STRING
        },
        cliente_endereco_estado: {
            type: Sequelize.STRING,
        },
        cliente_endereco_cidade: {
            type: Sequelize.STRING,
        },
        cliente_endereco_bairro: {
            type: Sequelize.STRING,
        },
        cliente_endereco_rua: {
            type: Sequelize.STRING,
        },
        cliente_endereco_numero: {
            type: Sequelize.INTEGER,
        },
        cliente_endereco_cep: {
            type: Sequelize.INTEGER,
        },
        cliente_endereco_detalhes: {
            type: Sequelize.STRING
        },
        cliente_status: {
            type: Sequelize.BOOLEAN,
            require: true,
            defaultValue: true
        },
        cliente_login: {
            type: Sequelize.STRING,
            require: true,
            unique: true
        },
        cliente_senha: {
            type: Sequelize.STRING,
            require: true
        },
        cliente_login_status: {
            type: Sequelize.BOOLEAN,
            require: true,
            defaultValue: true
        },
        cliente_role: {
            type: Sequelize.STRING,
        },
        cliente_criado_em: {
            type: Sequelize.DATE,
            require: true,
            defaultValue: new Date()
        },
    },
    options: {
        tableName: 'tab_clientes',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = ClienteSchema