import React from 'react'
import rides from '../mocks/rides.json'
import ListItem from './ListItem'


export default function Rides() {
  return (
    <>
    {rides.map((rides) => (
      <ListItem 
        key={rides.id} 
        kind={rides.kind} 
        date={rides.date} 
        time={rides.time} 
        from={rides.from}
        to={rides.to}
      />
    ))}
    </>
  )
}