import React from 'react'
import styled from 'styled-components'

export default function ListItem({kind, date, time, from, to}) {
  return (
    <List kind={kind}>
      <KindOfRide>{kind}</KindOfRide>
        <RideEntry kind={kind}>
          <p>amu</p> 
          {date} 
        </RideEntry>
    </List>
  )
}

const List = styled.div`
  margin: ${({kind}) => kind === 'gebuchte Fahrt' ? '10px 0 0 0' : '10px 0 0 40vw'};
  padding: 20px;
  width: 60vw;
  height: auto;
  font-size: 0.6em;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);   
  border: none;
  border-radius: ${({kind}) => kind === 'gebuchte Fahrt' ? '0 25px 25px 0' : '25px 0 0 25px'};
  background: var(--back-light);
  
  &:first-child {
    margin-top: 30px;
    border-radius: ${({kind}) => kind === 'gebuchte Fahrt' ? '25px 25px 25px 0' : '25px 25px 0 25px'};
  }
  
  &:last-child {
    margin-bottom: 30px;
    border-radius: ${({kind}) => kind === 'gebuchte Fahrt' ? '0 25px 25px' : '25px 0 25px 25px'};
  }
`

const KindOfRide = styled.h3`
  display: flex;
  align-content: center;
  font-size: 1.2em;
  color: var(--button-nav);
  margin-bottom: 10px;
  `
  
const RideEntry = styled.p`
  font-weight: 300;
  color: var(--button-nav);
`