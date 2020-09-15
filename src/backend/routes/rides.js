const router = require('express').Router()
let Ride = require('../models/rides.model')

router.route('/').get((req, res) => {
  Ride.find()
    .then((rides) => res.json(rides))
    .catch((err) => res.status(400).json('Erroer: ' + err))
})

router.route('/add').post((req, res) => {
  const rideDate = req.body.rideDate
  const rideTime = req.body.rideTime
  const rideFrom = req.body.rideFrom
  const rideTo = req.body.rideTo

  const newRide = new Ride({
    rideDate,
    rideTime,
    rideFrom,
    rideTo,
  })

  newRide
    .save()
    .then(() => res.json('Ride added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
