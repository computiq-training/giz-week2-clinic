const express = require('express')
const router = express.Router()
const {getAllHistory,getById,deleteById, addPrescription} = require('../../controllers/v1/history/HistoryController')


router.get('/', getAllHistory);
router.get('/:id',getById)
router.delete('/:id',deleteById)
router.put('/:id',addPrescription)
module.exports = router;