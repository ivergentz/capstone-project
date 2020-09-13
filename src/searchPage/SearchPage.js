import React, { useState } from 'react'
import styled from 'styled-components'
import search from '../assets/search.svg'

export default function Search() {
  const [isToggled, setIsToggled] = useState(false)

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
    </>
  )

  function toggleSearchBar() {
    setIsToggled(!isToggled)
  }
}

const Image = styled.img`
  margin: 10px;
  display: inline;
`

const Input = styled.input`
  display: flex;
  margin: auto;
  width: 80vw;
  font-size: 0.7em;
`
