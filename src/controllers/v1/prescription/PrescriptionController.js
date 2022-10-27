const Prescription = require('../../../models/prescription');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser')


const createPrescription = async (req, res)=>{
    let bdy = req.body
    const p = new Prescription(bdy)
    try {
        const returedObject = await p.save();
        return res.status(200).json(success(200, returedObject,"OK"))
    } catch (error) {
        return res.status(500).json(error(500,"Something went wrong"))
    }
}

const addPrescriptionToHistory = async(req, res)=>{
    const id = req.params.id; //Id From History
    let prescription = new Prescription(req.body)
    await prescription.save()
    let history = await History.findByIdAndUpdate(id,
        {
            $push:{
                prescription
            }
        })
        return res.status(200).json(success(200,history,"Success"))
}


module.exports = {
    createPrescription,
    addPrescriptionToHistory
}