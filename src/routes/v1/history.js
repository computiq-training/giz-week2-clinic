const express = require('express')
const router = express.Router()
const {getHistoryById,getAllHistory,deleateHistory,newPrescription} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.get('/:id', getHistoryById);
router.delete('/:id',deleateHistory);
router.post('/:id',newPrescription );
module.exports = router;