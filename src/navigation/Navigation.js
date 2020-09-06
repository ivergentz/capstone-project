import React from 'react'
import search from '../assets/search.svg'
import add from '../assets/plus.svg'
import train from '../assets/train.svg'
import styled from 'styled-components'


export default function Navbar() {
  return (
    <NavBar>
      <img src={search} alt="search icon" width="40" height="40" ></img>
      <img src={train} alt="home icon" width="40" height="40" ></img>
      <img src={add} alt="add icon" width="40" height="40" ></img>
    </NavBar>
  )
}

const NavBar = styled.nav`
display: flex;
justify-content: space-around;
margin-top: 1rem;
`