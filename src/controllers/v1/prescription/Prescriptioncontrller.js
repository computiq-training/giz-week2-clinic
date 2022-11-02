const Prescription = require('../../../models/prescription');
const { History } = require('../../../models/History');

const { success, error } = require('../../../utils/responser')



const createPrescription = async (req, res) => {
    const id = req.params.id;

    try {
        let prescription = new Prescription(req.body)
        await prescription.save()
        let history = await History.findByIdAndUpdate(id,
            {
                $push: {
                    prescription
                }
            })
        return res.status(200).json(success(200, history, "Success.."))
    } catch (error) {
        return res.status(500).json(error(500, "Server Error!"))
    }

}


module.exports = {
    createPrescription
}