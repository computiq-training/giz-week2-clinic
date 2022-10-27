const mongoose = require('mongoose');
const Schema = mongoose.Schema
const prescriptionSchema = new Schema({
    name:String, 
    dose: String
})
const prescription = mongoose.model('prescription', prescriptionSchema);
module.exports = {
    prescription, prescriptionSchema
}