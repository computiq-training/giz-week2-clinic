const express = require('express')
const router = express.Router()
const {getAllHistory,getHistoryById,newprescription,deleteHistory} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.get('/:id', getHistoryById);
router.post('/:id/prescription', newprescription);
router.delete('/:id', deleteHistory);
module.exports = router;