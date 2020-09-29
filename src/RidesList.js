import React from 'react'
import SingleRide from './RidesListItem'

export default function Rides({ rides }) {
  return (
    <>
      {rides?.map((ride) => (
        <SingleRide {...ride} />
      ))}
    </>
  )
}
