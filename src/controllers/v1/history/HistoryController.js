const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser');
const res = require('express/lib/response');
const { Prescription } = require('../../../models/Prescription');



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}

const gethistorybyid = async (req, res)=>{
    const id = req.params.id;
    const p = await History.findOne({_id:id})
    return res.status(200).json(success(200,p,"Success"))
}
const deletehistoryid = async (req, res)=>{
    const id = req.params.id;
    const deleted = await History.findOneAndDelete({ _id: id })
    return res.status(200).json(success(200,deleted,"Success"))

}
const createPrescriptionsForHistory= async(req,res)=>{
    const history= await History.findById(req.params.id);
    if(!history)
    return res.status(404).json(error(404, `history with id(${req.params.id} not found)`));
    const Prescription= new Prescription (req.body);
    await history.save();
    return res.status(200).json(success(200,deleted,"Success"))

}



module.exports = {
    getAllHistory,
    gethistorybyid,
    deletehistoryid,
    createPrescriptionsForHistory

}