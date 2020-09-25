import React from 'react'
import { ReactComponent as SearchSvg } from '../assets/search.svg'
import { ReactComponent as AddSvg } from '../assets/plus.svg'
import { ReactComponent as HomeSvg } from '../assets/train.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <NavBar>
      <NavLink activeStyle={{ fill: 'var(--button-nav)' }} to="/search">
        <SearchSvg />
      </NavLink>
      {/* <p>Fahrt suchen</p> */}
      <NavLink activeStyle={{ fill: 'var(--button-nav)' }} exact to="/">
        <HomeSvg />
      </NavLink>
      {/* <p>meine Fahrten</p> */}
      <NavLink activeStyle={{ fill: 'var(--button-nav)' }} to="/create">
        <AddSvg />
      </NavLink>
      {/* <p>Fahrt anlegen</p> */}
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;

  svg {
    height: 40px;
    width: 40px;
  }
`
