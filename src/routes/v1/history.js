const express = require('express')
const router = express.Router()
const {deleteHistory, getHistory,getAllHistory} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.delete('/:id', deleteHistory);
router.get('/:id', getHistory);
module.exports = router;