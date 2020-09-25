import React from 'react'
import styled from 'styled-components/macro'

export default function DashboardPage() {
  return (
    <>
      <Header>Deine Fahrten</Header>
      <NoRide>Noch keine Fahrt hinzugefügt</NoRide>
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
const NoRide = styled.p`
  font-size: 0.8em;
  display: grid;
  text-align: center;
  margin-top: 25%;
  color: white;
`
