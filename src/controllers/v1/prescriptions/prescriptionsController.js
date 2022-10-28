const History = require("../../../models/History");
const Prescription = require("../../../models/prescriptions");
const { success, error } = require("../../../utils/responser");

const getAllPres = async (req, res) => {
  const data = prescriptions.find();
  res.status(200).json(success(200, data, "Done"));
};

const getPresById = async (req, res) => {
  const id = req.params.id;
  let data = prescriptions.findById(id);
  if (!data) res.status(404).json(error(404, "data not found"));
  else res.status(200).json(success(200, data, "Prescription found"));
};

const createPres = async (req, res) => {
  const id = req.params.id;
  let data = await History.findById(id);
  if (!data) res.status(404).json(error(404, "data not found"));
  try {
    let pres = new Prescription(req.body);
    pres.save();
    data.prescription.push(pres._id);
    data.save();
    return res.status(200).json(success(200, data, "done"));
  } catch (_error) {
    return res.status(500).json(error(500, `Something want wrong ${_error}`));
  }
};

module.exports = {
  getAllPres,
  getPresById,
  createPres,
};
