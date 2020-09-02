import React from 'react'
import rides from '../mocks/rides.json'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

Rides.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.object).isRequired,
  _id: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  sc: PropTypes.string.isRequired,
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
        sc={rides.sc}
      />
    ))}
    </>
  )
}