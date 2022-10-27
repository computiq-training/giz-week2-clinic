const Patient = require('../../../models/Patient');
const {History} = require('../../../models/History');

const {success, error} = require('../../../utils/responser')



const getAllHistory = async (req, res)=>{
    let historyList = await History.find()
    return res.status(200).json(success(200,historyList,"Success"))
}

const getHistoryById = (req, res)=>{
    const id = req.params.id;
    History.findById(id)
    .populate('prescription')
    .then((r)=>{
        console.log('retreiving')
        return res.status(200).json(success(200,r,"Success"))
    })
    .catch((e)=>{
        console.error(e)
    })
}

const deleteHistoryByID = async (req, res)=>{
    const id = req.params.id;
    try {
        const history = await History.findByIdAndDelete(id);
        return res.status(200).json(success(200,history,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"Server Side Error"))
    }

}
module.exports = {
    getAllHistory,
    getHistoryById,
    deleteHistoryByID
}