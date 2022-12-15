const express = require('express')
const { 
    createOne, 
    getAll, 
    updateOne,
    deleteOne,
    getById,
    createMany,
 } = require('../controllers/userController')
const api = express.Router()
//const expressFileUpload = require('express-fileupload');
//api.use(expressFileUpload());

api.post('/createOne', createOne )
api.get('/getAll', getAll )
api.put('/updateOne/:id', updateOne )
api.delete('/deleteOne/:id',deleteOne )
api.get('/getById/:id', getById )
api.post('/createMany', createMany )
module.exports = api