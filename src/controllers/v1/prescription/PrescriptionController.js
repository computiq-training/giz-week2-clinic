const {History} = require('../../../models/History');
const {Prescription} = require('../../../models/Prescriptions');
const {success, error} = require('../../../utils/responser')



const createPrescription = async (req, res)=>{
    const id = req.params.id;
    let his = await History.findById(id)
    his.prescription.push(req.body)
    his.save()
    return res.status(200).json(success(200,his,"Success"))
}



module.exports = {
    createPrescription
}