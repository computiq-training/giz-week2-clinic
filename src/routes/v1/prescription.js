const express = require('express')
const router = express.Router()
const {newprescription} = require('../../controllers/v1/Prescription/PrescriptionController')

router.post('/:id/prescription', newprescription);
module.exports = router;