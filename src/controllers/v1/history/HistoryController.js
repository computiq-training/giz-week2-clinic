const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser')



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}
const getById = async (req, res)=>{
    const id = req.params.id;
    try{
    let h = await History.findById(id);
    return res.status(200).json(success(200,h,"Success"))}
    catch (e){
        return res.status(404).json(error(404,"History does not exist"))

    }
}

const deleteById = async (req, res)=>{
    const id = req.params.id;
    try {
        let h = await History.findByIdAndDelete(id);
        return res.status(200).json(success(200, h, "Success"))
    }
    catch (e){
        return res.status(404).json(error(404,"History does not exist"))

    }
}
const addPrescription=async (req, res)=>{
    const id = req.params.id;
    const bdy=req.body;
    try {
        let h = await History.findByIdAndUpdate(id, {$push: {prescription: bdy}},
            {new: true, useFindAndModify: false});
        await h.save()
        return res.status(200).json(success(200, h, "Success"))
    }
    catch (e){
        return res.status(404).json(error(404,"History does not exist"))

    }
}
module.exports = {
    getAllHistory,getById,deleteById,addPrescription
}