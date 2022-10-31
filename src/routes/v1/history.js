const express = require('express')
const router = express.Router()
const {createPrescriptionsForHistory,getAllHistory,gethistorybyid, newPres, deletehistoryid } = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.get('/id', gethistorybyid);
router.post('/:id/createPrescriptionsForHistory', createPrescriptionsForHistory);
router.delete('/id',deletehistoryid)
module.exports = router;