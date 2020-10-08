const express = require('express')
const bodyParser = require('body-parser');
const variavelAmbiente = require('./helpers/variavelAmbienteHelper')
var compression = require('compression')
require('./helpers/promiseRejection')
//const acl = require('./helpers/acl/aclHelper')

var session = require('express-session')
var cookieParser = require('cookie-parser')

var cors = require('cors')
require('./helpers/cors/corsHelper')

// ------- SEGURANCA -------
const helmet = require('helmet')

// ------- LOG -------
const morgan = require('morgan'), accessLogStream = require('./helpers/log/logHelper')

// ------- BANCO DE DADOS -------
const Postgres = require('./db/strategies/postgres/postgres'), MongoDb = require('./db/strategies/mongodb/mongodb'), MySql = require('./db/strategies/mysql/mysql')

// // ------- ROTAS -------
const routes = require('./routes/declaracaoRoutes'), swaggerDoc = require('./docs/swaggerDoc')

variavelAmbiente.config()
const app = express()


// app.set('trust proxy', 1) // trust first proxy
// var sess = {
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true,
//     cookie: {token: '0'}
// }
// if (app.get('env') ===  process.env.NODE_ENV) {
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true // serve secure cookies
// }
// app.use(session(sess))

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(compression());
app.use(cookieParser());
app.use(cors(this.corsOptions));

//app.use(acl.authorize);  

(async function main() {
    connectionMySql = await MySql.connect()
    await MySql.isConnected(this.connectionMySql)
    // connectionPostgres = await Postgres.connect() 
    // await Postgres.isConnected(this.connectionPostgres)
    // connectionMongoDB = MongoDb.connect()
    // await MongoDb.isConnected(this.connectionMongoDB)

    app.use('/', routes)
    swaggerDoc(app)

    const server = app.listen(process.env.PORT, function () {
        console.log('Servidor rodando na porta ' + server.address().port);
    })
})()
