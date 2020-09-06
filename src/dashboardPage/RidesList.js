import React from 'react'
import ListItem from './RidesListItem'

export default function RidesList({rides}) {
  return (
    <>
    {rides.map((rides) => (
      <ListItem 
        key={rides._id}
        {...rides}
     />
    ))}
    </>
  )
}