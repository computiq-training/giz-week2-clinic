const { success, error } = require("../../../utils/responser");
const { Prescription } = require("../../../models/Prescription");



const newPrescriptiontoHistory= async(req,res)=>{
    let bdy = req.bdy
    console.log(bdy)
    let p= new Prescription(bdy)
    try{
        let returnObj= await p.save();
        return res.status(200).json(success(200,p,"ok"))
    } catch(e){
        return res.status(500).json(error(500,"Something went wrong"+e.message))

    }
}
module.exports={
    newPrescriptiontoHistory,
}

