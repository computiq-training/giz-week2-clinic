const express = require('express')
const router = express.Router()
const {getAllHistory, getHistoryById, newPres,deleteHis} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.get('/:id', getHistoryById);
router.post('/:id/pres', newPres);
router.delete('/:id', deleteHis);
// router.get('/', crHistory);
module.exports = router;