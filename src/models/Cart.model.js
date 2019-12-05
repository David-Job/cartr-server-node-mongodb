const { model, Schema } = require('mongoose');

const cartModel = model('Cart', new Schema({
  userId: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
}));

module.exports = cartModel;
