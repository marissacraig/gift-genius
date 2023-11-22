const { Schema, model } = require('mongoose');

const listSchema = new Schema({
  title: {
    type: String,
    required: 'List must have a title',
    minlength: 1,
    maxlength: 60,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  private: {
    type: Boolean,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});

const List = model('List', listSchema);

module.exports = List;