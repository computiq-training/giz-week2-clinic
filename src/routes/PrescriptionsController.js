const express = require('express')
const router = express.Router()
const {getAllPrescriptions} = require('../../controllers/v1/Prescription/PrescriptionController')


router.get('/', getAllPrescriptions);
module.exports = router;