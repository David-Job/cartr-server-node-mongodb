const { model, Schema } = require('mongoose');

const cartSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

module.exports = model('Cart', cartSchema);
