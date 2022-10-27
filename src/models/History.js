const mongoose = require('mongoose');
const Schema = mongoose.Schema
const { PrescriptionSchema } = require('./Prescription');

const HistorySchema = new Schema({
    date:{
        type:String,
        require:true
    },
    report: String,
    prescription:[ 
        // TO-DO
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Prescription'
        }
    ]
    
})
const History = mongoose.model('History', HistorySchema);
module.exports = {
    History, HistorySchema
}