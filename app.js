require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/dbConnection.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


connectDB();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views")); 
app.use(express.static(path.join(__dirname, '/css/style')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', require('./routes/userRoute.js'));
app.use('/tasks', require('./routes/taskRoute.js'));
app.use('/', require('./routes/viewRoute.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});
