import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as SearchSvg } from './image/search.svg'
import { ReactComponent as AddSvg } from './image/plus.svg'
import { ReactComponent as HomeSvg } from './image/train.svg'

export default function Navbar() {
  return (
    <NavBar>
      <NavLink activeStyle={{ fill: 'var(--button-green)' }} to="/search">
        <SearchSvg />
      </NavLink>
      <NavLink activeStyle={{ fill: 'var(--button-green)' }} exact to="/">
        <HomeSvg />
      </NavLink>
      <NavLink activeStyle={{ fill: 'var(--button-green)' }} to="/create">
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
    /* background: var(--button-green); */
    border-radius: 10px;
    box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
    padding: 10px;
    height: 50px;
    width: 50px;
  }
`
