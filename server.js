require('dotenv').config()
const { appConfig, dbConfig } = require('./config');
const mongoose = require('mongoose');

//app de express
const app = require('./app');
const { connectDB } = require('./database/mongodb');
const { dbConnection } = require('./database/config');

const server = require('http').createServer(app);

let initApp = async (appConfig, dbConfig) => {
    try {
        // await connectDB(dbConfig)
        await dbConnection();
        server.listen(appConfig.port, ()=>console.log(`listen on ${appConfig.port}`))
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}
initApp(appConfig, dbConfig)