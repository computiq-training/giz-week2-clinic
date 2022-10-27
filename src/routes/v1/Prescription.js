const express = require('express')
const router = express.Router()
const {createPrescription, addPrescriptionToHistory} = require('../../controllers/v1/prescription/PrescriptionController')



router.post('/', createPrescription);
router.post('/id/prescriptionToHistory', addPrescriptionToHistory);
module.exports = router;