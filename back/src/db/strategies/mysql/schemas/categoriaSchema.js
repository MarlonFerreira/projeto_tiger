const Sequelize = require('sequelize')

const CategoriaSchema = {
    name: 'tab_categorias',
    schema: {
        categoria_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria_nome: {
            type: Sequelize.STRING,
            require: true,
        },
        categoria_detalhes: {
            type: Sequelize.STRING,
            require: true,
        },
        categoria_slug: {
            type: Sequelize.STRING,
        },
        categoria_status: {
            type: Sequelize.BOOLEAN,
            require: true,
            defaultValue: true
        },
        categoria_criado_em: {
            type: Sequelize.DATE,
            require: true,
            defaultValue: new Date()
        },
    },
    options: {
        tableName: 'tab_categorias',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = CategoriaSchema