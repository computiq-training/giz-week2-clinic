const Patient = require('../../../models/Patient');
const {Prescription} = require('../../../models/Prescription');
const {History} = require('../../../models/History');
const {success, error} = require('../../../utils/responser')


const addNewPrescriptionToHistoryWay2=async (req, res)=>{
    const id = req.params.id;  // history id
    const bdy=req.body;     // name & dose
    try{
    let newHistory = await History.findById(id);
        await newHistory.prescription.push(bdy);
        await newHistory.save()
        return res.status(200).json(success(200, newHistory, `Success Add Prescription (By Way2) To History ID ${id}`))
    }catch (e){
        console.log(e)
        return res.status(404).json(error(404, `Error Add Prescription (By Way2) To History ID ${id}`))
    }
}


module.exports = {
    addNewPrescriptionToHistoryWay2
}