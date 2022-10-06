const PersonalController = require('../controllers/personal.controller');

// API routes passed in "app" from server.js
module.exports = (app) => {
    app.get ('/api/personals', PersonalController.findAll);
    app.get ('/api/personals/:id', PersonalController.findOne);
    app.post ('/api/personals', PersonalController.createPersonal);
    app.put ('/api/personals/:id', PersonalController.updatePersonal);
    app.delete ('/api/personals/:id', PersonalController.deletePersonal);
    app.get('/api/personals/musclegroup/:group', PersonalController.findAllwithCatagory);
}