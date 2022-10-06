// Bring in the model Note
const Exercise = require('../models/exercise.model');

// CRUDs
module.exports = {

    // Read ALL
    findAll: (req, res) => {
        Exercise.find()
            .then(allExercises => res.json(allExercises))
            .catch(err => res.json({ message: "There was an error", serverError: err }))
    },

    // Create a new note
    createExercise: (req, res) => {
        console.log(req.body);
        Exercise.create(req.body)
            .then(newExercise => res.json(newExercise))
            .catch(err => res.status(400).json(err))
    },
    // Read ONE
    findOne: (req, res) => {
        Exercise.findById(req.params.id)
            .then(pirate => res.json(pirate))
            .catch(err => err.json({ message: "There was an error find one note", serverError: err }))
    },

    // Update a note
    updateExercise: (req, res) => {
        Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedExercise => res.json(updatedExercise))
            .catch(err => res.status(400).json(err))
    },

    // Delete a note
    deleteExercise: (req, res) => {
        Exercise.findByIdAndDelete(req.params.id)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json({ message: "There was an errors deleting the note", serverError: err }))
    },

    // Find all with catagory
    findAllwithCatagory: (req, res) => {
        Exercise.find({muscleGroup: req.params.group})
        .then (allExercisesWithCatagory => res.json(allExercisesWithCatagory))
        .catch (err => err.json({ message: "There was an error finding all with catagory" , serverError: err }))
    }
};
