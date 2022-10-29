const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PrescriptionSchema = new Schema({
        name:String,
    dose: String


})
const Prescription = mongoose.model('prescription', PrescriptionSchema);
module.exports = {
    Prescription, PrescriptionSchema
}