const express = require("express");
const router = express.Router();
const {newPrescriptiontoHistory} = require("../../controllers/v1/prescription/PrescriptionController")

router.post("/", newPrescriptiontoHistory);

module.exports = router;