const { model, Schema } = require('mongoose');

const carritoModel = model('Carrito', new Schema({
  id_usuario: {
    type: String,
    required: true,
  },
  id_articulo: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
}));

module.exports = carritoModel;
