import React from 'react'
import styled from 'styled-components'
import data from "../mocks/bookedrides.json"



export default function BookedRides() {
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
  margin-left: 0;
  padding-left: 0;
  width: 60vw;

  .ride {
    border: 3px solid hotpink;
    border-radius: 0 25px 25px 0;
    margin-bottom: 30px;
  }
`

