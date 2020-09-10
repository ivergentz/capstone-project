import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default function ListItem({kind, date, time, from, to}) {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <StyledListItem onClick={toggleRideDetails} kind={kind}>
      <RideHeading>{kind}</RideHeading>
        <RideEntry>
          <div>{date}</div>
          {isToggled && <div>{time}</div>}
          <div>{from}</div>
          {isToggled && <div>{to}</div>}
          {isToggled && <div>more ride details</div>}
        </RideEntry>
    </StyledListItem>
  )

  function toggleRideDetails() {
    setIsToggled(!isToggled)
  }
}

const StyledListItem = styled.div`
  margin: ${({kind}) => kind === 'gebuchte Fahrt' ? '10px 0 0 0' : '10px 0 0 40vw'};
  padding: 20px;
  width: 60vw;
  height: auto;
  font-size: 0.6em;
  box-shadow: 0 2px 2px 2px rgba(37, 37, 37, 0.3);   
  border: none;
  border-radius: ${({kind}) => kind === 'gebuchte Fahrt' ? '0 25px 25px 0' : '25px 0 0 25px'};
  background: var(--back-light);
  
  &:first-child {
    margin-top: 30px;
    border-radius: ${({kind}) => kind === 'gebuchte Fahrt' ? '25px 25px 25px 0' : '25px 25px 0 25px'};
  }
  
  &:last-child {
    margin-bottom: 30px;
    border-radius: ${({kind}) => kind === 'gebuchte Fahrt' ? '0 25px 25px' : '25px 25px 0 25px'};
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