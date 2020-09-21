const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ridesSchema = new Schema(
  {
    rideDate: {
      type: String,
      required: true,
    },
    rideTime: {
      type: String,
      required: true,
    },
    rideFrom: {
      type: String,
      required: true,
    },
    rideTo: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Ride = mongoose.model('Ride', ridesSchema)

module.exports = Ride
