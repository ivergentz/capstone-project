import React from 'react'
import rides from '../mocks/rides.json'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

Rides.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.object),
  _id: PropTypes.string,
  kind: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  sc: PropTypes.string,
}


export default function Rides() {
  return (
    <>
    {rides.map((rides) => (
      <ListItem 
        key={rides._id} 
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