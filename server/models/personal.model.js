const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "{PATH}'s minimum length is 3 characters"]
    },
    imgUrl: {
        type: String
    },
    muscleGroup: {
        type: String,
        required: [true, "Img URL is required"]
    },
    description: {
        type: String,
        required: true,
        required: [true, "Description is required"]
    },
    equipmentRequired: {
        type: Boolean
    },
    equipment: {
        type: String
    },
    weight: {
        type: String
    }, 
    date: {
        type: Date
    }

}, { timestamps: true });

// Create a new NoteSchema and export it 
const Personal = mongoose.model("Personal", PersonalSchema);

module.exports = Personal;