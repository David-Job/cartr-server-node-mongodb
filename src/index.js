const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const uri = process.env.MONGO_DB_URI;
const port = process.env.NODE_SERVER_PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/usuarios', require('./routes/Usuario.routes'));
app.use('/carritos', require('./routes/Carrito.routes'));
app.use('/articulos', require('./routes/Articulo.routes'));

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
