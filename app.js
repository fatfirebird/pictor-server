const express = require('express');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRoute);

mongoose.connect(
   process.env.MONGODB_CONNECTION, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   }
)

app.get('/', (req, res) => {
  res.send('Старт');
});

app.listen(8000);
