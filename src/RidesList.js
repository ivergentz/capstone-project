import React from 'react'
import ListItem from './RidesListItem'

export default function Rides({ rides }) {
  return (
    <>
      {rides?.map((ride) => (
        <ListItem {...ride} />
      ))}
    </>
  )
}
