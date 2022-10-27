const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser');
const { Prescription } = require('../../../models/Prescription');



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}

const getHistoryById = async (req,res)=>{
    const id = req.params.id;
   const h = await History.findById(id)
    return res.status(200).json(success(200, h,"ok"))

}

const newPres = async (req, res)=>{
    const id = req.params.id;//history
    // TO-DO
    let his = await History.findById(id);
    // console.log('p',p)
    if(!his)
        return res.status(404).json(error(404,{},"No Data"))

    
    let pres = new Prescription(req.body)
    //if we send prescriotion as array
    // let array = req.body
    // array.map(p=> {
    //    let pres= new Prescription(p)
    //    pres.save()
    //    his.prescription.push(pres._id)
    //    his.save()

    
    // })

    console.log(req.body)
    await pres.save()

    his.prescription.push(pres._id)
    his.save()
    return res.status(200).json(success(200,his,"Success"))
}


const deleteHis =async(req,res)=> {
    const id = req.params.id;
    try {
        const his = await History.findByIdAndDelete(id);
        return res.status(200).json(success(200,his,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"Server Side Error"))
    }

}


module.exports = {
    getAllHistory,
    getHistoryById,
    newPres,
    deleteHis
}