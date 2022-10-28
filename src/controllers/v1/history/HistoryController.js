const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');
const {success, error} = require('../../../utils/responser')



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}
const getHistory = async (req, res)=>{
    const id = req.params.id;
    let his = await History.findById(id)
    return res.status(200).json(success(200,his,"Ok"))
}

const deleteHistory = async (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const hist = await History.findByIdAndRemove(id)
    let p = await Patient.updateOne({
        $pull:{
            history: id
        }
    })
    return res.status(200).json(success(200,hist,"Success"))
}
    
module.exports = {
    getAllHistory,
    getHistory,
    deleteHistory
}