const express = require("express");
const router = express.Router();
const {
  getAllPres,
  getPresById,
  createPres,
} = require("../../controllers/v1/prescriptions/prescriptionsController");

router.get("/prescriptions/", getAllPres);
router.get("/prescriptions/:id", getPresById);
router.post("/history/:id", createPres);

module.exports = router;
