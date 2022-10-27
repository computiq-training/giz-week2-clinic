const mongoose = require("mongoose");
const { presSchema } = require("./prescriptions");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  date: {
    type: String,
    require: true,
  },
  report: String,
  prescription: [
    {
      type: mongoose.Schema.Types.ObjectId,
      prescription: "Prescriptions",
    },
  ],
});

module.exports = mongoose.model("History", HistorySchema);
