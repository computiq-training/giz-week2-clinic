const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser')

// TO-DO
// Create history for given patient ID
const createHistoryForP=async (req, res)=>{
    const id = req.params.id;//patient
    // TO-DO
    let p = await Patient.findByIdAndUpdate(id,
            {
                $push:{
                    history:req.body
                }
            }
        )
    return res.status(200).json(success(200,p,"Success"))

}
const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}



module.exports = {
    getAllHistory,
    newHistory:createHistoryForP
}