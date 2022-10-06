// Bring in the model Note
const Personal = require('../models/personal.model');

// CRUDs
module.exports = {

    // Read ALL
    findAll: (req, res) => {
        Personal.find()
            .then(allPersonals => res.json(allPersonals))
            .catch(err => res.json({ message: "There was an error", serverError: err }))
    },

    // Create a new note
    createPersonal: (req, res) => {
        console.log(req.body);
        Personal.create(req.body)
            .then(newPersonal => res.json(newPersonal))
            .catch(err => res.status(400).json(err))
    },
    // Read ONE
    findOne: (req, res) => {
        Personal.findById(req.params.id)
            .then(personal => res.json(personal))
            .catch(err => err.json({ message: "There was an error find one note", serverError: err }))
    },

    // Update a note
    updatePersonal: (req, res) => {
        Personal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedPersonal => res.json(updatedPersonal))
            .catch(err => res.status(400).json(err))
    },

    // Delete a note
    deletePersonal: (req, res) => {
        Personal.findByIdAndDelete(req.params.id)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json({ message: "There was an errors deleting the note", serverError: err }))
    },

    // Find all with catagory
    findAllwithCatagory: (req, res) => {
        Personal.find({muscleGroup: req.params.group})
        .then (allPersonalsWithCatagory => res.json(allPersonalsWithCatagory))
        .catch (err => err.json({ message: "There was an error finding all with catagory" , serverError: err }))
    }
};