const express = require('express')
const router = express.Router()
// const {getAllHistory, getHistoryById, newPres} = require('../../controllers/v1/history/HistoryController
const {newPres2} = require('../../controllers/v1/Prescription/PresController')



router.post('/:id/pres', newPres2);
// router.get('/', crHistory);
module.exports = router;