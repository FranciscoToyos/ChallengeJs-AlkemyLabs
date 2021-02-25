//** Require model of database **//
const Database = require('../database/models/budget');

module.exports = {
    list: async (req,res,next) => {
        const databases = await Database.find();
        res.json({databases, msg:'Funciona'})
    }
}