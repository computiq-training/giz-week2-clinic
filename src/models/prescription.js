const mongoose = require('mongoose');
const Schema = mongoose.Schema

const prescriptionSchema = new Schema({
    name:String,
    dose: String,
})

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription