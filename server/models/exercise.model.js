const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "{PATH}'s minimum length is 3 characters"]
    },
    imgUrl: {
        type: String,
        required: [true, "Img URL is required"]
    },
    muscleGroup: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    equipmentRequired: {
        type: Boolean
    },
    equipment: {
        type: String
    }

}, { timestamps: true });

// Create a new NoteSchema and export it 
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
