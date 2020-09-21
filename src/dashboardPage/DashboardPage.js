import React, { useEffect, useState } from 'react'
import Rides from './RidesList'
import axios from 'axios'
import styled from 'styled-components/macro'

export default function DashboardPage() {
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
      <Header>Deine Fahrten</Header>
      <Rides rides={rides} />
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
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
  position: fixed;
  width: 100%;
`
