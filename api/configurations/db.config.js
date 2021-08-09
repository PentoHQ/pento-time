import mongoose from 'mongoose'

export default function connectDB () {
  mongoose.connect('mongodb://database:27017/pento-time', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('DB Connected')
  }).catch((err) => {
    console.log(err)
  })
}
