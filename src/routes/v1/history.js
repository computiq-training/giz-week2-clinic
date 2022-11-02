const express = require('express')
const router = express.Router()
const { getAllHistory, getHistoryById, deleteHistoryByID } = require('../../controllers/v1/history/HistoryController')

router.get('/', getAllHistory);
router.get('/:id', getHistoryById);
router.delete('/:id', deleteHistoryByID);
module.exports = router;