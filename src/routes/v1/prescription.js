const express = require("express");
const router = express.Router();
const {
    createPrescription
} = require("../../controllers/v1/prescription/PrescriptionController")

router.post("/", createPrescription);

module.exports = router;