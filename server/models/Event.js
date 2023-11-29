const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: 'List must have a title',
    minlength: 1,
    maxlength: 60,
    trim: true,
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

const Event = model('Event', eventSchema);



module.exports = Event;

