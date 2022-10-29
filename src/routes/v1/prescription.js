const express = require('express')
const router = express.Router()
const {addNewPrescriptionToHistoryWay2} = require('../../controllers/v1/prescription/PrescriptionController')


router.post(`/:id`, addNewPrescriptionToHistoryWay2);


module.exports = router;