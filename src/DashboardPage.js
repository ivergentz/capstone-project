import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as LogoSvg } from './image/riide.svg'
import Rides from './RidesList'
import SingleRide from './AllRides'

export default function DashboardPage(_id, isBookmarked) {
  const [rides, setRides] = useState()

  useEffect(() => {
    Axios.get('http://localhost:5000/rides')
      .then((response) => {
        setRides(response.data)
      })
      .catch(function (error) {
        console.log(error.response.data)
      })
  }, [])

  useEffect(() => {
    localStorage.getItem(_id, isBookmarked)
  }, [isBookmarked])
  // console.log(isBookmarked)
  console.log(_id)

  return (
    <>
      {/* <Header>Deine Fahrten</Header> */}
      {isBookmarked ? <SingleRide _id={_id} /> : 'asdf'}
      {/* <LogoStyling>
        <LogoSvg />
      </LogoStyling> */}
      {/* <NoRide>Noch keine Fahrt hinzugefügt</NoRide> */}
      {/* <Rides isBookmarked={isBookmarked} rides={rides} /> */}
      {/* {console.log('rides', rides)} */}
      {/* {console.log('Bookmark', isBookmarked)} */}
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
`
const NoRide = styled.p`
  font-size: 0.8em;
  display: grid;
  text-align: center;
  margin-top: 25%;
  color: white;
`
