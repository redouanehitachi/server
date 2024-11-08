const express = require('express');
require('./services/passport');
const keys = require('./config/Keys')
const mongoose = require('mongoose');


mongoose.connect(keys.mongoURI);
const app = express();
require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('connect to server')
});


