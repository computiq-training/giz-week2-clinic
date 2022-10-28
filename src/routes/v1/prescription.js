const express = require('express')
const router = express.Router()
const {createPrescription} = require('../../controllers/v1/prescription/PrescriptionController')


router.get('/:id', createPrescription);
module.exports = router;