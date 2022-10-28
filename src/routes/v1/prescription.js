const express = require('express')
const router = express.Router()
const {createPrescription} = require('../../controllers/v1/prescription/PrescriptionController')


router.post('/:id', createPrescription);
module.exports = router;