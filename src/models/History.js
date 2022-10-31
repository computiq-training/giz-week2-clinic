const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HistorySchema = new Schema({
    date:{
        type:String,
        require:true
    },
    report: String,
    prescription:[ 
        // TO-DO
    ],
    attachments:[
    ]
    
})
const History = mongoose.model('History', HistorySchema);
module.exports = {
    History, HistorySchema
}