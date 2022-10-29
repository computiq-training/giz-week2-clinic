const Prescription = require('../../../../models/Prescription')
const {History} = require('../../../models/History')

const {success, error} = require('../../../utils/responser')

const getAllPrescriptions = async (req, res)=>{
    const drug_name = req.query.drug_name;
    const dose = req.query.dose
    const limit = req.query.limit?req.query.limit:10
    const offset = req.query.offset?req.query.offset:0

    const filter = {};
    if(drug_name)
    {
        filter.drug_name = drug_name;
    }
    if(dose)
        filter.dose = {
            $regex: `.*${dose}.*`
        };
    let data = await Prescription
    
    .aggregate([
        {
            $match:filter
        }
        ,
       {
        $sort:{
            dose:-1
        }
       },
       {$limit:limit - 0},
       {$skip:offset - 0},
       {
        $project:{
            dose:1,
            history:1
        }
       }
    ])

    return res.status(200).json(success(200,data,"Success"))
}

module.exports = {
    getAllPrescriptions
}