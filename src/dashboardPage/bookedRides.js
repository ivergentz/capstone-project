import React from 'react'
import styled from 'styled-components'
import bookedrides from "../mocks/bookedrides.json"

export default function BookedRides() {
  return (
    <List>
      <Headline>gebuchte Fahrt</Headline>

    </List>
 )
}





const Headline = styled.h2`
  color: blue;
  font-size: 0.9em;
`
const List = styled.div`
  border: 1px solid hotpink;
  border-radius: 0 25px 25px 0;
  margin: 10px;
  padding: 10px;
  margin-left: 0;
  padding-left: 0;
  max-height: 100px;
  
  ul {
    list-style: none;
  }
`

