const express = require('express')
const router = express.Router()
const {getAllHistory, getHistoryById, deleteHistoryById, addNewPrescriptionToHistoryIdWay1 } = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.get('/:id', getHistoryById);//
router.delete('/:id', deleteHistoryById);//
router.post('/:id', addNewPrescriptionToHistoryIdWay1);//
module.exports = router;