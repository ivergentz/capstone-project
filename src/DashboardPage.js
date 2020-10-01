import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as LogoSvg } from './image/riide.svg'
import Rides from './AllRides'

export default function DashboardPage(_id, isBookmarked) {
  {
    console.log('id', _id)
  }

  {
    console.log('Bookmark', isBookmarked)
  }

  return (
    <>
      <Header>Meine Fahrten</Header>
      {isBookmarked ? (
        <Container>
          <Rides />
        </Container>
      ) : (
        <div>
          <LogoStyling>
            <LogoSvg />
          </LogoStyling>
          <NoRide>Noch keine Fahrt hinzugefügt</NoRide>
        </div>
      )}
    </>
  )
}

const LogoStyling = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 40%;
  width: 80vw;
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
  z-index: 100;
`
const NoRide = styled.p`
  font-size: 0.8em;
  display: grid;
  text-align: center;
  margin-top: 25%;
  color: white;
`

const Container = styled.section`
  margin-top: 20vh;
`
