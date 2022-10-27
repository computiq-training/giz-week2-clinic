const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');
const {prescription} = require('../../../models/prescription');

const {success, error} = require('../../../utils/responser')


const getHistoryById= async(req,res)=>{
    const id =req.params.id
    let history =  await History.findOne({_id:id})
    if(!history)
    return res.status(404).json(error(404,"not found"))
    return res.status(200).json(success(200,history,"Success"))

}
const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}
const deleateHistory = async (req, res)=>{
    const id = req.params.id;
    let h = await History.findOne({_id:id})
    const deleted = await History.findOneAndDelete({ _id: id })
    if(!deleted)
    return res.status(404).json(error(404,"not found"))

    return res.status(200).json(success(200,deleted,"Success"))

}
const newPrescription=async (req, res)=>{
    const id = req.params.id;
   
    let h = await History.findById({_id:id});
    if(!h)
        return res.status(404).json(error(404,{},"No Data"))

        let p = new prescription(req.body)
        await p.save()
        h.prescription.push(h._id)
        h.save()
        return res.status(200).json(success(200,h,"Success"))

}


module.exports = {
    getAllHistory,getHistoryById,deleateHistory,newPrescription
}