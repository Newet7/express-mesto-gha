const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
)

const Card = mongoose.model('card', cardSchema)

module.exports = {
  Card,
}
