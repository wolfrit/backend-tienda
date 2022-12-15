const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connection.on('open', () => console.log('db connected'))


let connectDB = async ({host, port, dbName}) => {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri);


}

module.exports = {
    connectDB
}