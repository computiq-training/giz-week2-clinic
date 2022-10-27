const express = require('express')
const router = express.Router()
const {newPrescription}=require('../../controllers/v1/presscriptions/presscriptionsController')
router.post('/:id',newPrescription );
module.exports = router;