const express = require('express')
const router = express.Router()
const {getAllHistory, newHistory} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.post('/', newHistory);
// TO-DO // add endpoint for posting new history for a patient
module.exports = router;