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
  }
  // TODO: Add items reference
})