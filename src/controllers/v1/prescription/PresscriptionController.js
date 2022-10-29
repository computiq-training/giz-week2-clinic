const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser')



const addPrescription=async (req, res)=>{
    const id = req.params.id;
    const bdy=req.body;
    try{
    let h = await History.findById(id);
        h.prescription.push(bdy);
        await h.save()
        return res.status(200).json(success(200,h,"Success"))

    }
    catch (e){
        return res.status(404).json(error(404,"History does not exist"))

    }

}
module.exports = {
    addPrescription
}