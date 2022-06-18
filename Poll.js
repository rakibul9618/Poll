const { Schema, model } = require('mongoose');

const pollSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  totalVote: {
    type: String,
    default: 0,
  },
  options: {
    type: [
      {
        name: String,
        vote: Number,
      },
    ],
  },
});

const Poll = model('Poll', pollSchema);

module.exports = Poll;
