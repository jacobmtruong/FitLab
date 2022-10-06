const ExerciseController = require('../controllers/exercise.controller');

// API routes passed in "app" from server.js
module.exports = (app) => {
    app.get ('/api/exercises', ExerciseController.findAll);
    app.get ('/api/exercises/:id', ExerciseController.findOne);
    app.post ('/api/exercises', ExerciseController.createExercise);
    app.put ('/api/exercises/:id', ExerciseController.updateExercise);
    app.delete ('/api/exercises/:id', ExerciseController.deleteExercise);
    app.get('/api/exercises/musclegroup/:group', ExerciseController.findAllwithCatagory);
}
