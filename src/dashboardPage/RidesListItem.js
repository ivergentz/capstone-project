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
      <RideHeading>{kind}</RideHeading>
      <RideEntry>
        <p>{rideDate}</p>
        {isToggled && <p>{rideTime}</p>}
        <p>{rideFrom}</p>
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
  margin: ${({ kind }) =>
    kind === 'gebuchte Fahrt' ? '10px 0 0 0' : '10px 0 0 40vw'};
  padding: 20px;
  width: 60vw;
  height: auto;
  font-size: 0.6em;
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
  border: none;
  border-radius: ${({ kind }) =>
    kind === 'gebuchte Fahrt' ? '0 25px 25px 0' : '25px 0 0 25px'};
  background: var(--back-light);

  &:first-child {
    margin-top: 30px;
    border-radius: ${({ kind }) =>
      kind === 'gebuchte Fahrt' ? '25px 25px 25px 0' : '25px 25px 0 25px'};
  }

  &:last-child {
    margin-bottom: 30px;
    border-radius: ${({ kind }) =>
      kind === 'gebuchte Fahrt' ? '0 25px 25px' : '25px 25px 0 25px'};
  }
`

const RideHeading = styled.h3`
  display: flex;
  align-content: center;
  font-size: 1.2em;
  color: var(--button-nav);
  margin-bottom: 10px;
`

const RideEntry = styled.p`
  font-weight: 300;
  color: var(--button-nav);
  width: auto;
`
