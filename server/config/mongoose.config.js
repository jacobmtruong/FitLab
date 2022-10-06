const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/fitlabDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to fitlabDB'))
    .catch(err => { console.log("There was an error connecting to fitlabDB", err) })
