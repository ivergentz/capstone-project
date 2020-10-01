import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

SingleRide.propTypes = {
  _id: PropTypes.string.isRequired,
  rideDate: PropTypes.string.isRequired,
  rideTime: PropTypes.string.isRequired,
  rideFrom: PropTypes.string.isRequired,
  rideTo: PropTypes.string.isRequired,
  rideDetails: PropTypes.string.isRequired,
}

export default function SingleRide({
  rideDate,
  rideTime,
  rideFrom,
  rideTo,
  _id,
  rideDetails,
}) {
  const [isToggled, setIsToggled] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(
    JSON.parse(localStorage.getItem(_id) || false)
  )

  useEffect(() => {
    localStorage.setItem(_id, isBookmarked)
  }, [isBookmarked]) // eslint-disable-line react-hooks/exhaustive-deps

  const Mailto = ({ children, _id }) => {
    const formattedBody =
      'Liebes Riide-Team,  \n hiermit Frage ich o.g. Fahrt zur Buchung an. \n\n '

    return (
      <a
        href={`mailto:riide@info.com?subject=Riide Anfrage ID#${
          encodeURIComponent(_id) || 'asdf'
        }&body=${encodeURIComponent(formattedBody) || ''}`}
      >
        {children}
      </a>
    )
  }

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
          <GridLeft>
            <p>Abfahrtsort</p>
          </GridLeft>
          <GridRight>{rideFrom}</GridRight>
          <GridLeft>
            <p>Datum</p>
          </GridLeft>
          <GridRight>{rideDate}</GridRight>
          <GridLeft>Ankunftsort</GridLeft>
          <GridRight>{rideTo}</GridRight>
          {isToggled && <GridLeft>Zeit</GridLeft>}
          {isToggled && <GridRight>{rideTime}</GridRight>}
          {isToggled && <GridLeft>Buchen</GridLeft>}
          {isToggled && (
            <GridRight>
              <Mailto _id={_id}>&#9993;</Mailto>{' '}
            </GridRight>
          )}
          {isToggled && <GridLeft>Infos</GridLeft>}
          {isToggled && <GridRight>{rideDetails}</GridRight>}
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

  a {
    text-decoration: none;
    color: white;
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
  z-index: 50;

  &.active {
    background: var(--button-green);
  }
`

const RideEntry = styled.p`
  display: grid;
  row-gap: 1em;
  grid-template-columns: 2;
  grid-template-rows: auto;
  color: var(--button-nav);
  width: auto;
`
const GridRight = styled.p`
  margin-left: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
`

const GridLeft = styled.p`
  grid-column-start: 0;
  grid-column-end: 1;
  font-size: 0.7em;
`
