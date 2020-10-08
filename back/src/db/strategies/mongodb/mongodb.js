const ICrud = require('./../interfaces/intefaceCrud')
const Mongoose = require('mongoose')

const STATUS = {
    0: 'Desconectado',
    1: 'Conectado',
    2: 'Conectando',
    3: 'Desconectado',
    4: 'Credencial Invalida'
}

class MongoDB extends ICrud {
    constructor(connection, schema) {
        super()
        this._schema = schema
        this._connection = connection

    }
    static async isConnected(connection) {
        console.log('Database MongoDB status...', STATUS[connection.readyState])
        const state = STATUS[connection.readyState]
        if (state === 'Conectado')
            return state
        if (state !== 'Conectando')
            return state

        await new Promise(resolve => setTimeout(resolve, 1000))

        return STATUS[connection.readyState]
    }

    static connect() {
        Mongoose.connect(process.env.MONGODB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
                if (!error) return;
                console.log('Falha na conexao', error)
            })

        const connection = Mongoose.connection

        connection.once('open', () => console.group('Database MongoDB conectado!'))
        return connection
    }

    async create(item) {
        return this._schema.create(item)
    }

    read(item, skip=0, limit=10){
        return this._schema.find(item).skip(skip).limit(limit)
    }

    update(id, item){
        return this._schema.updateOne({_id: id}, {$set: item})
    }

    delete(id){
        return this._schema.deleteOne({_id: id})
    }

}

module.exports = MongoDB