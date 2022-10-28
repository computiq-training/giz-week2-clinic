const Patient = require("../../../models/Patient");
const { History } = require("../../../models/History");
const { Prescription } = require("../../../models/Prescription");
const { success, error } = require("../../../utils/responser");

const getAllHistory = async (req, res) => {
  let historyList = await History.find();
    return res
        .status(200)
        .json(success(200, historyList, "Success"));
};

const getHistoryById = async (req, res) => {
  let history = await History.findById(req.params.id);
    if (history) return res
        .status(200)
        .json(success(200, history, "Ok"));
  else res
      .status(404)
      .json(error(404, "failed, not found"));
};

const deleteHistory = async (req, res) => {
  try {
    const deletedHistory = await History.findByIdAndDelete(req.params.id);
      return res
          .status(200)
          .json(success(200, deletedHistory, "Ok"));
  } catch (e) {
      return res
          .status(404)
          .json(error(404, "not Found"));
  }
};

const createPrescriptionsForHistory = async (req, res) => {
  const history = await History.findById(req.params.id);
  if (!history)
    return res
      .status(404)
      .json(error(404, `history with id(${req.params.id}) not found`));
  const newPrescription = new Prescription(req.body);
  await newPrescription.save();
  history.prescription.push(newPrescription.id);
  await history.save();
    return res
        .status(200)
        .json(success(200, history, "Ok"));
};
module.exports = {
  getAllHistory,
  getHistoryById,
  deleteHistory,
  createPrescriptionsForHistory,
};
