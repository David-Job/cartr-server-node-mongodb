const { model, Schema } = require('mongoose');

const itemModel = model('Item', new Schema({
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
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

module.exports = itemModel;
