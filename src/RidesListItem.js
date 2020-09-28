import React, { useState, useEffect } from 'react'
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
  rideDate,
  rideTime,
  rideFrom,
  rideTo,
  _id,
}) {
  const [isToggled, setIsToggled] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(
    JSON.parse(localStorage.getItem(_id) || false)
  )

  useEffect(() => {
    localStorage.setItem(_id, isBookmarked)
  }, [isBookmarked])
  return (
    <>
      <StyledListItem onClick={toggleRideDetails} key={_id}>
        <BookmarkSymbol
          onClick={handleBookmarkClick}
          className={isBookmarked && 'active'}
        >
          &hearts;
        </BookmarkSymbol>
        <RideEntry>
          <p>{rideFrom}</p>
          <p>{rideDate}</p>
          {isToggled && <p>{rideTime}</p>}
          {isToggled && <p>{rideTo}</p>}
        </RideEntry>
      </StyledListItem>
    </>
  )

  function toggleRideDetails() {
    setIsToggled(!isToggled)
  }
  function handleBookmarkClick(event) {
    event.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }
}

const StyledListItem = styled.section`
  position: relative;
  display: flex;
  margin: 25px;
  justify-content: left;
  padding: 20px;
  height: auto;
  font-size: 0.6em;
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
  border: none;
  border-radius: 25px;
  background: var(--back-light);

  & :nth-child(2) {
    margin-top: 16vh;
  }
`

const BookmarkSymbol = styled.button`
  background: var(--button-nav);
  position: absolute;
  top: -10px;
  right: 20px;
  z-index: 100;
  height: 30px;
  width: 40px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);

  &.active {
    background: var(--button-green);
  }
`

const RideEntry = styled.p`
  font-weight: 300;
  color: var(--button-nav);
  width: auto;
`
