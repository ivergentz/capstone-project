import React from 'react'
import ListItem from './RidesListItem'

<<<<<<< HEAD
=======

>>>>>>> master
export default function RidesList({rides}) {
  return (
    <>
    {rides.map((rides) => (
      <ListItem 
<<<<<<< HEAD
        key={rides._id}
        {...rides}
     />
=======
        key={rides.id}
        {...rides}
      />
>>>>>>> master
    ))}
    </>
  )
}