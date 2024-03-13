const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const blogSchema = new mongoose.Schema(
  {
    _id: Number,
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    blog: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
)

blogSchema.plugin(AutoIncrement, { inc_field: '_id' })

module.exports = mongoose.model('Blog', blogSchema)
