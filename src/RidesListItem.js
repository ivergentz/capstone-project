import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  rideDate: PropTypes.string.isRequired,
  rideTime: PropTypes.string.isRequired,
  rideFrom: PropTypes.string.isRequired,
  rideTo: PropTypes.string.isRequired,
}

export default function ListItem({
  kind,
  rideDate,
  rideTime,
  rideFrom,
  rideTo,
}) {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <StyledListItem onClick={toggleRideDetails} kind={kind}>
      <RideEntry>
        <p>{rideFrom}</p>
        <p>{rideDate}</p>
        {isToggled && <p>{rideTime}</p>}
        {isToggled && <p>{rideTo}</p>}
        {isToggled && <p>more ride details</p>}
      </RideEntry>
    </StyledListItem>
  )

  function toggleRideDetails() {
    setIsToggled(!isToggled)
  }
}

const StyledListItem = styled.section`
  display: grid;
  margin: 10px;
  justify-content: left;
  padding: 20px;
  height: auto;
  font-size: 0.6em;
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
  border: none;
  border-radius: 25px;
  background: var(--back-light);
`

const RideEntry = styled.p`
  font-weight: 300;
  color: var(--button-nav);
  width: auto;
`
