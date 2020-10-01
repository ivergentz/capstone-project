import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Rides from './RidesList'

export default function AllRides(_id) {
  const [rides, setRides] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/rides')
      .then((response) => {
        setRides(response.data)
      })
      .catch(function (error) {
        console.log(error.response.data)
      })
  }, [])

  return (
    <>
      <Header>Fahrt finden</Header>

      <Rides key={_id} rides={rides} />
    </>
  )
}

const Header = styled.h1`
  display: flex;
  color: var(--button-nav);
  font-weight: 100;
  align-content: center;
  justify-content: center;
  padding: 20px;
  background: var(--back-light);
  border-radius: 0 0 25px 25px;
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
  position: fixed;
  width: 100%;
  z-index: 100;
`
