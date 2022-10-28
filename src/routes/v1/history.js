const express = require("express");
const router = express.Router();
const {
  getAllHistory,
  getHistoryById,
  deleteHistory,
} = require("../../controllers/v1/history/HistoryController");

router.get("/", getAllHistory);
router.get("/:id", getHistoryById);
router.delete("/:id", deleteHistory);

module.exports = router;
