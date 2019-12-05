const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const uri = process.env.MONGO_DB_URI;
const port = process.env.NODE_SERVER_PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', require('./routes/User.routes'));
app.use('/api/carts', require('./routes/Cart.routes'));
app.use('/api/items', require('./routes/Item.routes'));

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connected to database on ${uri}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
