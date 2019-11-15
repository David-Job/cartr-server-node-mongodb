const { model, Schema } = require('mongoose');

const usuarioModel = model('Usuario', new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  apellido1: {
    type: String,
    required: true,
    trim: true,
  },
  apellido2: {
    type: String,
    required: true,
    trim: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
}));

module.exports = usuarioModel;
