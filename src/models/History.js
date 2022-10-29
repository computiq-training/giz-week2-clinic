const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {PrescriptionSchema}=require('../models/prescription')
const HistorySchema = new Schema({
    date:{
        type:String,
        require:true
    },
    report: String,
    prescription:[ 
        // TO-DO
        PrescriptionSchema
    ]
    
})
const History = mongoose.model('History', HistorySchema);
module.exports = {
    History, HistorySchema
}