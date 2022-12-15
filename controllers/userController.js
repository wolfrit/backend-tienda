const User = require('../models/user.model')
async function createOne (req,res) {
    try {
        const {
            name,
        } = req.body
        const userObject = new User({
              name,
          })
        userObject.save()
        res.status(200).send({
            msg:'user creado',
            data:userObject,
            count:userObject.length
        })
    } catch (e) {
        res.status(500).send({
            ok: false,
            msg: e.msg
       })
     }
}


async function getAll(req, res){
    try {
        const usersResult = await User.find({state: true})
        res.status(200).send({
            ok: true,
            data: usersResult
        })      
    } catch (e) {
    }
}


async function updateOne(req,res){
    try {
        const {
            name,
        } = req.body
        const {
            id
        } = req.params
        const updateObject = await User.findByIdAndUpdate({
                _id:id
            },{
                name
            },{new: true})
        res.status(200).send({
            msg: 'update',
            data: updateObject
        });
    } catch (e) {
        res.status(500).send({
            ok: false,
            msg: e.msg
       })
    }

}

async function deleteOne(req,res){
    try {  
        const {
            id
        } = req.params
        const deleteObject = await User.findByIdAndUpdate({
                _id:id
            },{
                state: false
            },{new: true})
        res.status(200).send({
            ok: true,
            msg: 'delete',
            data: deleteObject
        })
    } catch (e) {
        res.status(500).send({
            ok: false,
            msg: e.msg
       })
    }
}

async function getById(req,res){
    try {
        const { id } = req.params
        const userResult = await User.findById({ _id: id})
        res.status(200).send({
            msg: 'read one',
            data: userResult
        });
    } catch (e) {
        res.status(500).send({
            ok: false,
            msg: e.msg
       })
    }
}

async function createMany (req,res) {
    try {
        const {
            list
        } = req.body
        const usersResult = await User.create(list)
        res.status(200).send({
            ok: true,
            msg:'lista creada',
            data: usersResult
        })
    } catch (e) {
        res.status(500).send({
            ok: false,
            msg: e.msg
       })
    }
}

module.exports = {
    createOne, 
    getAll, 
    updateOne,
    deleteOne,
    getById,
    createMany,
}