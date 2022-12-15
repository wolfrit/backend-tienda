const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const { storageLocalConfig } = require('./config')

// Rutas
const userRoute = require('./routes/userRoute')

const app = express()


app.use(cors())
app.options('*', cors());

app.use(express.urlencoded({extended: false}))

// middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/v1/user',userRoute)

//Carpeta publica
app.use('/public', express.static(`${__dirname}/public`))

module.exports = app
