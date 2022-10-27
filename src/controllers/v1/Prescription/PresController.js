const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser');
const { Prescription } = require('../../../models/Prescription');


const newPres2 = async(req, res)=>{
    const id = req.params.id;//history
    let press = new Prescription(req.body)
    await press.save()
    let his = await History.findByIdAndUpdate(id,
        {
            $push:{
                prescription:press

            }
        }
        
        )
        return res.status(200).json(success(200,his,"Success"))

}




module.exports = {
    newPres2
}