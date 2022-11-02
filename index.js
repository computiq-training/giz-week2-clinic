const express = require('express')
const app = express()
const patientsRouter = require('./src/routes/v1/patients')
const historyRouter = require('./src/routes/v1/history')
const prescriptionRouter = require('./src/routes/v1/prescription')

// Connecting to  MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/clinic');
const db = mongoose.connection;
db.on('error',(e)=>{
    console.error(e)
})

db.once('open', ()=>{
    console.log('Connected to DB successfully')
})

const PORT = 5000;
// middlwares
app.use(express.json())

// for testing
app.get('/', (req, res)=>{
    res.send('<h1>This is Clinic Restful API</h1>')
});

// call routers

app.use('/api/v1/patients',patientsRouter);
app.use('/api/v1/history',historyRouter);
app.use('/api/v1/prescription',prescriptionRouter);


app.listen(PORT)