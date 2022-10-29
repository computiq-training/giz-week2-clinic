const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser')



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}

const getHistoryById = async (req, res)=>{
    const id = req.params.id;
    History.findById(id)
    .then((p)=>{
        return res.status(200).json(success(200, p, `Success Get History ID ${id}`))
    })
    .catch((e)=>{
        console.error(e)
        return res.status(404).json(error(404, `Not Found History ID ${id}`))
    })
}

const deleteHistoryById = async (req, res)=>{
    const id = req.params.id; // patient id
    try {
        let p = await History.findByIdAndDelete(id)
        return res.status(200).json(success(200, p, `Success Deleted History ID ${id}`))
    } catch (error) {
        return res.status(404).json(error(404, `Error Deleted History ID ${id}`))
    }
}

const addNewPrescriptionToHistoryIdWay1 = async (req, res)=>{
    const id = req.params.id; // patient id
    try {
        let p = await History.findByIdAndUpdate(id,
            {
                $push: { prescription: req.body } ,
            }
        )
        return res.status(200).json(success(200, p, "Success Add Prescription To History To Patient"))
    } catch (error) {
        return res.status(404).json(error(404, "Error To Add Prescription To History To Patient"))
    }
}

module.exports = {
    getAllHistory,
    getHistoryById,
    deleteHistoryById,
    addNewPrescriptionToHistoryIdWay1
}