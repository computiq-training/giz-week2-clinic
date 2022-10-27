const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HistorySchema = new Schema({
    date:{
        type:String,
        require:true
    },
    report: String,
    prescription:[ 
        {
            type: mongoose.Schema.ObjectId,
            ref: "Prescription"
        }
    ]
    
})
const History = mongoose.model('History', HistorySchema);
module.exports = {
    History, HistorySchema
}