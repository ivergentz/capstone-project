const mongoose = require('mongoose')
const { string } = require('yup')

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
    rideDetails: {
      type: String,
    },
  },
  { timestamps: true }
)

const Ride = mongoose.model('Ride', ridesSchema)

module.exports = Ride
