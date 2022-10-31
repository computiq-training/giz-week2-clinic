const multer = require('multer')
const path = require('path')
let util = require('util')
let storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, path.join(__dirname,'../../public/resources/uploads'))
    },
    filename:(req, file, callback)=>{
        callback(null, Date.now()+'_'+file.originalname)
    }
})

const maxSizeInBytes = 2 * 1024 * 1024;
let uploadFile = multer({
    storage:storage,
    limits:{
        fileSize:maxSizeInBytes
    }
}).single('file')

let uploadMW = util.promisify(uploadFile)
module.exports = uploadMW;

