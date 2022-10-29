/*
npm run dev


createPatient
http://localhost:5000/api/v1/patients/


get id of Patient 
newHistory
http://localhost:5000/api/v1/patients/635d380566e46174630898ce/history


get id of History
[
    addNewPrescriptionToHistoryWay1     // findByIdAndUpdate $push
    http://localhost:5000/api/v1/history/635d381c66e46174630898d1/

    addNewPrescriptionToHistoryWay2     // findById push save
    http://localhost:5000/api/v1/prescription/635d381c66e46174630898d1
]


getHistoryById
http://localhost:5000/api/v1/history/635d381c66e46174630898d1

deleteHistoryById
http://localhost:5000/api/v1/history/635d381c66e46174630898d1/


*/