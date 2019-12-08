const express = require('express');
const mongoose = require('mongoose');
const regRoute = require('./routes/reg');
const logRoute = require('./routes/log');
const editRoute = require('./routes/edit');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
require('dotenv/config');

const app = express();

mongoose.connect(
   process.env.MONGODB_CONNECTION, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   }
)

app.use(cors());
app.use(bodyParser.json());
app.use('/reg', regRoute);
app.use('/log', logRoute);
app.use('/edit', editRoute);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Старт');
});

app.listen(8000);
