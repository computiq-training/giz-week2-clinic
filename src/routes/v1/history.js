const express = require('express')
const router = express.Router()
const {getAllHistory} = require('../../controllers/v1/history/HistoryController')
const {getHistoryById,deleteHistory, createPrescriptionsForHistory,} = require("../../controllers/v1/history/HistoryController");

router.get('/', getAllHistory);
router.get('/:id', getHistoryById);
router.delete("/:id", deleteHistory);
router.put("/:id", createPrescriptionsForHistory);
module.exports = router;