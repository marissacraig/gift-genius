const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: {
    type: String,
    required: 'Item must have a title',
    minlength: 1,
    maxlength: 60,
    trim: true,
  },
  url: {
    type: String
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  wishability: {
    type: Number
  },
  fulfilled: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number
  }
});

const Item = model('Item', itemSchema);

module.exports = Item;

