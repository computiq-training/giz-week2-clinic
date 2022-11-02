const Patient = require('../../../models/Patient');
const { History } = require('../../../models/History');

const { success, error } = require('../../../utils/responser')



const getAllHistory = async (req, res) => {
    let historyList = await History.find()
    return res.status(200).json(success(200, historyList, "Success"))
}


const getHistoryById = async (req, res) => {
    let id = req.params.id;
    try {
        await History.findById(id)
            .populate('prescriptions')
        return res.status(200).json(success(200, {}, "Success.."))
    } catch (e) {
        return res.status(500).json(error(500, "Server Error!"))
    }
}

const deleteHistoryByID = async (req, res) => {
    let id = req.params.id;
    try {
        await History.findByIdAndDelete(id);
        return res.status(200).json(success(200, {}, "Success.."))
    } catch (e) {
        return res.status(500).json(error(500, "Server Error!"))
    }

}


module.exports = {
    getAllHistory,
    getHistoryById,
    deleteHistoryByID
}