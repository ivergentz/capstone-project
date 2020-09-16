const router = require('express').Router()
let Ride = require('../models/rides.model')

router.route('/').get((req, res) => {
  Ride.find()
    .then((rides) => res.json(rides))
    .catch((err) => res.status(400).json('Erroer: ' + err))
})

router.route('/').post((req, res) => {
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

router.route('/:id').delete((req, res) => {
  Ride.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ride deleted'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').post((req, res) => {
  Ride.findById(req.params.id)
    .then((rides) => {
      rides.rideDate = req.body.rideDate
      rides.rideTime = req.body.rideTime
      rides.rideFrom = req.body.rideFrom
      rides.rideTo = req.body.rideTo

      rides
        .save()
        .then(res.json('Ride updated'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
