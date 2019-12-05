const { model, Schema } = require('mongoose');

const userModel = model('User', new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  surname1: {
    type: String,
    required: true,
    trim: true,
  },
  surname2: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
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

module.exports = userModel;
