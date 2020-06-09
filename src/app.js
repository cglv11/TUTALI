const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

//importing routes
const indexRoutes = require('./routes/index');

//connecting
mongoose.connect('mongodb://localhost/TUTALI', {useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Database connected'))
.catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // give us view file
app.set('view engine', 'ejs'); //Acknowledge all files ending EJS

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extend: false})); //convert doc html to json file

// routes
app.use('/', indexRoutes);

// starting server
app.listen(app.get('port'), () => {
 console.log(`Server on port ${app.get('port')}`);
});
