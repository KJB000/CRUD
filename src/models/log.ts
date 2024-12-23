import mongoose, { Schema } from 'mongoose'

const logSchema = new Schema(
  {
    email: { type: String, require: true },
  },
  {
    timestamps: true,
  }
)
const Log = mongoose.models.Log || mongoose.model('Log', logSchema)
export default Log
