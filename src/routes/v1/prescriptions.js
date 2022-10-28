const express = require("express");
const router = express.Router();
const {
  getAllPres,
  getPresById,
  createPres,
} = require("../../controllers/v1/prescriptions/prescriptionsController");

router.get("/", getAllPres);
router.get("/:id", getPresById);
router.post("/history/:id", createPres);

module.exports = router;
