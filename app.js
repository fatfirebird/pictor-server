const express = require('express');
const mongoose = require('mongoose');
const regRoute = require('./routes/reg');
const logRoute = require('./routes/log');
const uploadRoute = require('./routes/upload');
const editRoute = require('./routes/edit')
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const path = require('path');
require('dotenv').config({path: __dirname + '/.env'})

const app = express();

mongoose.connect(
   process.env.MONGODB_CONNECTION,
    {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }
);

const PORT = process.env.port || 8000;
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/data', express.static('data'));
app.use('/reg', regRoute);
app.use('/log', logRoute);
app.use('/upload', uploadRoute);
app.use('/edit',editRoute);
app.use(errorHandler);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT);
