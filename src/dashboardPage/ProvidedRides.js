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
    <p>Datum: {item.date}</p>
    <p>Zeit: {item.time}</p>
    <p>von: {item.from}</p>
    <p>nach: {item.to}</p>
  </div>
  )

const List = styled.div`
  display: block;
  margin: 10px;
  padding: 10px;
  margin-right: 0;
  padding-right: 0;
  width: auto;

  .ride {
    border: 3px solid purple;
    border-radius: 25px 0 0 25px;
    margin-bottom: 30px;
    min-width: 300px;
  }
`

