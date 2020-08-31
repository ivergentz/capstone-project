import React from 'react'
import styled from 'styled-components'
import data from "../mocks/providedrides.json"



export default function ProvidedRides() {
  return (
    <>
      <List>
       {listItems}
      </List>
    </>
    
 )
} 

const listItems = data.map(item => 
  <div className="ride" key={item._id}>
    <h2>{item.kind} </h2>
    <h3>Datum:</h3>
      {item.date}
    <h3>Zeit: </h3>
      {item.time}
    <h3>von: </h3>
      {item.from}
    <h3>nach: </h3>
      {item.to}
  </div>
  )

const List = styled.div`
  margin: 10px;
  padding: 10px;
  padding-right: 0;
  margin-right: 0;

  h3 {
    font-size: 0.7em; 
    margin-top: 10px;
  }

  .ride {
    font-size: 0.5em;
    border-radius: 25px 0 0 25px;
    margin-bottom: 30px;
    background: var(--back-light);
    color: var(--button-nav);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
`

