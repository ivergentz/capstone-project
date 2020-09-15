import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { response } from 'express'

export default function Create() {
  const [rideDate, setRideDate] = useState('')
  const [rideTime, setRideTime] = useState('')
  const [rideFrom, setRideFrom] = useState('')
  const [rideTo, setRideTo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const ride = {
      rideDate: rideDate,
      rideTime: rideTime,
      rideFrom: rideFrom,
      rideTo: rideTo,
      kind: 'angebotene Fahrt',
    }

    axios
      .post('http://localhost:5000/rides/', ride)
      .then((res) => console.log(res.data))

    window.location = '/create'
  }

  return (
    <>
      <Header>Neue Fahrt</Header>
      <Container>
        <form onSubmit={handleSubmit}>
          <label>Wann willst du fahren?</label>
          <input
            required
            placeholder="Datum"
            value={rideDate}
            onChange={(date) => setRideDate(date.target.value)}
          />
          <input
            placeholder="Uhrzeit"
            type="text"
            required
            value={rideTime}
            onChange={(time) => setRideTime(time.target.value)}
          />
          <div>
            <input
              placeholder="Ab"
              type="text"
              required
              value={rideFrom}
              onChange={(from) => setRideFrom(from.target.value)}
            />
            <input
              placeholder="Nach"
              type="text"
              required
              value={rideTo}
              onChange={(to) => setRideTo(to.target.value)}
            />
          </div>
          {/* <div>
            <label>Mache ein Angebot:</label>
            <input placeholder="weitere Details zur Fahrt"></input>
          </div> */}
          <SubmitButton type="submit" value="Submit"></SubmitButton>
        </form>
        <CancelButton>back</CancelButton>
      </Container>
    </>
  )
}

const Container = styled.section`
  margin-top: 20%;
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
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
  position: fixed;
  width: 100%;
`
// const InputSection = styled.form`
//   margin-top: 25%;

//   input {
//     background: none;
//     border: 0.2px solid var(--back-dark);
//   }

//   label {
//     color: var(--button-nav);
//     width: 85%;
//     padding-top: 0.7em;
//     font-size: 0.7em;
//     margin-left: 20px;
//   }
// `

// const InputRideDetails = styled.input`
//   height: 1.5em;
//   color: black;
//   padding-top: 20px;
//   display: grid;
//   font-size: 0.8em;
//   margin: 20px;
//   margin-bottom: 20px;
//   width: 85%;
// `

// const InputTime = styled.div`
//   background: var(--back-light);
//   margin-bottom: 20px;
//   width: 85%;
//   border-radius: 0 25px 25px 0;
//   padding-bottom: 10px;
// `
// const InputDirection = styled.form`
//   background: var(--back-light);
//   padding-bottom: 10px;
//   border-radius: 25px 0 0 25px;
//   width: 85%;
//   margin: 0px 0 0 15vw;
//   margin-bottom: 20px;
// `

// const InputMoreDetails = styled.form`
//   background: var(--back-light);
//   margin-bottom: 20px;
//   width: 85%;
//   border-radius: 0 25px 25px 0;
//   padding-bottom: 10px;
// `

const SubmitButton = styled.input`
  border: none;
  border-radius: 25px;
`
const CancelButton = styled.button`
  background: red;
  margin-bottom: 10vh;
`
