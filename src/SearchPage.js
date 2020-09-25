import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import search from './image/search.svg'
import Rides from './RidesList'

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
      <Header>Fahrt durchsuchen</Header>
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
`
