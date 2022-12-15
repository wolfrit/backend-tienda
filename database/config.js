const mongoose = require('mongoose');



const dbConnection = async() => {

    try {
        const uri = process.env.MONGODB_ATLAS_CONNECTION
        await mongoose.connect( uri);
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}
