const { success, error } = require("../../../utils/responser");
const { Prescription } = require("../../../models/Prescription");

const createPrescription = async (req, res) => {
  const newPrescription = await new Prescription(req.body);
  await newPrescription.save();
  return res.status(200).json(success(200, newPrescription, "Ok"));
};


module.exports = {
    createPrescription
}