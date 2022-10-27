const {success, error} = require('../../../utils/responser');
const {History} = require('../../../models/History');
const { Prescription } = require('../../../models/Prescription');

const newprescription = async(req, res)=>{
    const id = req.params.id;
    let prescription = new Prescription(req.body)
    await prescription.save()
    let history = await History.findByIdAndUpdate(id,
        {
            $push:{
                prescription:prescription
            }
        } )
        return res.status(200).json(success(200,history,"Success"))
}
module.exports = {
    newprescription
}