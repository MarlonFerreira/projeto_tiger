const Sequelize = require('sequelize')

const UsuarioSchema = {
    name: 'tab_usuarios',
    schema: {
        usuario_id: {
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
        usuario_login: {
            type: Sequelize.STRING,
            require: true
        },
        usuario_senha: {
            type: Sequelize.STRING,
            require: true
        },
        usuario_login_status: {
            type: Sequelize.BOOLEAN,
            require: true,
            defaultValue: true
        }
    },
    options: {
        tableName: 'tab_usuarios',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = UsuarioSchema