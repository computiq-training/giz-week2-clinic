const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PrescriptionSchema = new Schema({
    name:String,
    dose: String
    
})
const Prescription = mongoose.model('Prescription', PrescriptionSchema);
module.exports = {
    Prescription, PrescriptionSchema
}