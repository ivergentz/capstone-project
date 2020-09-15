import React from 'react'
import Rides from './RidesList'
// import rides from '../data/rides.json'
import axios from 'axios'

axios
  .get('http://localhost:5000/rides')
  .then(function (rides) {
    console.log(rides.data)
  })
  .catch(function (error) {
    console.log(error.response.data)
  })

export default function DashboardPage(rides) {
  return (
    <>
      <Rides rides={rides} />
    </>
  )
}
