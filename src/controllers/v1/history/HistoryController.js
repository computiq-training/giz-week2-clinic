const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');
const {Prescription} = require('../../../models/Prescription');

const {success, error} = require('../../../utils/responser')



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}

const getHistoryById = async (req,res)=>{
    const id = req.params.id;
   const history = await History.findById(id)
    return res.status(200).json(success(200, history,"ok"))

}
const newprescription = async(req, res)=>{
    const id = req.params.id;
    let history = await History.findById(id);
    if(!history)
        return res.status(404).json(error(404,{},"erorr"))

    let prescription = new Prescription(req.body)
    await prescription.save()
    history.prescription.push(prescription._id)
    history.save()
    return res.status(200).json(success(200,his,"Success"))
}

const deleteHistory =async(req,res)=> {
    const id = req.params.id;
    try {
        const history = await History.findByIdAndDelete(id);
        return res.status(200).json(success(200,history,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"error"))
    }

}

module.exports = {
    getAllHistory,
    getHistoryById,
    newprescription,
    deleteHistory
}