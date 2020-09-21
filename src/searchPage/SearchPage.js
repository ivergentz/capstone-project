import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import search from '../assets/search.svg'
import Rides from '../dashboardPage/RidesList'

export default function Search() {
  const [isToggled, setIsToggled] = useState(false)
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
      <Image
        src={search}
        onClick={toggleSearchBar}
        alt="search icon"
        width="30"
        height="30"
      ></Image>
      {isToggled && <Input placeholder="Deine Fahrten durchsuchen"></Input>}
      <Rides rides={rides} />
    </>
  )

  function toggleSearchBar() {
    setIsToggled(!isToggled)
  }
}

const Image = styled.img`
  margin: 25% 10px 10px 10px;
  display: inline;
`

const Input = styled.input`
  display: flex;
  margin: auto;
  width: 80vw;
  font-size: 0.7em;
`
