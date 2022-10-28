const express = require('express')
const router = express.Router()
const {createPrescription, deleteHistory, getHistory,getAllHistory} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.delete('/:id', deleteHistory);
router.get('/:id', getHistory);
router.post('/:id/prescription', createPrescription);
module.exports = router;