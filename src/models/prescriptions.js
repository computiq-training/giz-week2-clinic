const mongoose = require("mongoose");
const schema = mongoose.Schema;
const presSchema = new schema({
  _name: String,
  dose: String,
});

module.exports = mongoose.model("Prescription", presSchema);
