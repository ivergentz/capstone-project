import React from 'react'
import styled from 'styled-components'
import rides from "../mocks/bookedrides.json"



export default function BookedRides() {
  return (
    
      <List>
      {rides.map(ride => 
        <div className="ride" key={ride._id}>
          <h2>{ride.kind}</h2>
            <h3>Datum:</h3>
            {ride.date}
            <h3>Zeit: </h3>
            {ride.time}
            <h3>von: </h3>
            {ride.from}
            <h3>nach: </h3>
            {ride.to} </div>
  )}
      </List>
  
    
 )
} 

const List = styled.div`
  display: block;
  margin: 10px;
  padding: 10px;
  margin-left: 0;
  padding-left: 0;
  width: 60vw;
 
  h3 {
    font-size: 0.7em; 
    margin-top: 10px;
  }

  .ride {
    font-size: 0.5em;
    max-height: 150px;
    width: 65vw;
    display: inline-table;
    border-radius: 0 25px 25px 0;
    margin-bottom: 30px;
    /* background: ${({status}) => status === "angebotene Fahrt" ? 'hotpink' : (status === "gebuchte Fahrt" ? 'yellow' : 'black')}; */
    background: var(--back-light);
    color: var(--button-nav);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
    padding: 30px;
  }
`

