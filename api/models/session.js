import mongoose from 'mongoose'

const SessionSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  time: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: new Date()
  }
})

export default mongoose.model('Session', SessionSchema)
