const express = require('express')
const router = express.Router()
const {addPrescription} = require('../../controllers/v1/prescription/PresscriptionController')


router.put('/:id',addPrescription)
module.exports = router;