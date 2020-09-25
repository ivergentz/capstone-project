import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as SearchSvg } from './image/search.svg'
import { ReactComponent as AddSvg } from './image/plus.svg'
import { ReactComponent as HomeSvg } from './image/train.svg'

export default function Navbar() {
  return (
    <NavBar>
      <NavLink activeStyle={{ fill: 'var(--button-nav)' }} to="/search">
        <SearchSvg />
      </NavLink>
      <NavLink activeStyle={{ fill: 'var(--button-nav)' }} exact to="/">
        <HomeSvg />
      </NavLink>
      <NavLink activeStyle={{ fill: 'var(--button-nav)' }} to="/create">
        <AddSvg />
      </NavLink>
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
