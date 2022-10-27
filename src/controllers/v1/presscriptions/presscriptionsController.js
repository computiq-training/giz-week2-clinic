const {success, error} = require('../../../utils/responser')
const {History} = require('../../../models/History')
const {prescription} = require('../../../models/prescription')
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
    newPrescription
}