//import { Sequelize } from "sequelize/types";
const Sequelize = require('sequelize')

const UsuarioSchema = {
    name: 'tab_usuarios',
    schema: {
        usuario_id: {
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true
        },
        usuario_login: {
            type: Sequelize.STRING,
            require: true
        },
        usuario_password: {
            type: Sequelize.STRING,
            require: true
        },
        usuario_login_status: {
            type: Sequelize.BOOLEAN,
            require: true
        }
    },
    options: {
        tableName: 'TAB_USUARIOS',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = UsuarioSchema