const Patient = require("../../../models/Patient");
const { History } = require("../../../models/History");

const { success, error } = require("../../../utils/responser");

const getAllHistory = async (req, res) => {
  let historyList = await History.find();
  return res.status(200).json(success(200, historyList, "Success"));
};

const getHistoryById = async (req, res) => {
  let id = req.query.id;
  let data = await History.findById(id);
  if (!data) res.status(404).json(error(404, "History NOT found"));
  try {
    res.status(200).json(success(200, data, "History founded"));
  } catch (error) {
    res.status(500).json(error(500, "Something want wrong"));
  }
};

const deleteHistory = async (req, res) => {
  let id = req.params.id;
  await History.findById(id).deleteOne();
  //   if (!data) res.status(404).json(error(404, "History NOT found"));
  try {
    res.status(200).json(success(200, "History has been deleted"));
  } catch (_error) {
    res.status(500).json(error(500, `Something want wrong ${_error}`));
  }
};
const addPres = async (req, res) => {
  const id = req.query.id;
  let data = History.findById(id);
  if (!data) res.status(404).json(error(404, "History NOT found"));
  try {
  } catch (error) {}
};
module.exports = {
  getAllHistory,
  getHistoryById,
  deleteHistory,
};
