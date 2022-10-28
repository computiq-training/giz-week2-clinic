const mongoose = require('mongoose')
const schema = mongoose.Schema

const PrescriptionSchema = schema({
    name: String,
    dose: String
})

const Prescription = mongoose.model("Prescription", PrescriptionSchema);
module.exports = {
    Prescription
}