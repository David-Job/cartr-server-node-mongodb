const { model, Schema } = require('mongoose');

const articuloModel = model('Articulo', new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
}));

module.exports = articuloModel;
