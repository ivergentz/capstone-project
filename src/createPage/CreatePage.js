import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Create() {
  const [rideDate, setRideDate] = useState('')
  const [rideTime, setRideTime] = useState('')
  const [rideFrom, setRideFrom] = useState('')
  const [rideTo, setRideTo] = useState('')
  const [kind, setKind] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const ride = {
      rideDate: rideDate,
      rideTime: rideTime,
      rideFrom: rideFrom,
      rideTo: rideTo,
      kind: kind,
    }

    axios
      .post('http://localhost:5000/rides/', ride)
      .then((res) => console.log(res.data))

    window.location = '/create'
  }

  return (
    <>
      <Header>Fahrt anlegen</Header>
      <Container>
        <form
          onSubmit={handleSubmit}
          onChange={() => setKind('angebotene Fahrt')}
        >
          <LabelStyling>
            Wann willst du fahren?
            <InputDetails
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              required
              value={rideDate}
              onChange={(date) => setRideDate(date.target.value)}
            ></InputDetails>
            <InputDetails
              placeholder="Uhrzeit"
              type="text"
              required
              value={rideTime}
              onChange={(time) => setRideTime(time.target.value)}
            />
          </LabelStyling>
          <LabelStyling>
            Wohin willst du fahren?
            <InputDetails
              placeholder="Ab"
              type="text"
              required
              value={rideFrom || ''}
              onChange={(from) => setRideFrom(from.target.value)}
            />
            <InputDetails
              placeholder="Nach"
              type="text"
              required
              value={rideTo}
              onChange={(to) => setRideTo(to.target.value)}
            />
          </LabelStyling>
          <SubmitButton type="submit" value="Fahrt anlegen"></SubmitButton>
        </form>
        <CancelButton type="submit" value="Eingaben löschen"></CancelButton>
      </Container>
    </>
  )
}

const Container = styled.section`
  display: grid;
  margin: 25% auto;
  justify-content: center;
`

const LabelStyling = styled.label`
  font-size: 0.8em;
  display: grid;
  text-align: center;
  margin-bottom: 20px;
  padding: 0.8em;
  background: var(--back-light);
  border-radius: 25px;
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
`

const InputDetails = styled.input`
  height: 4em;
  display: flex;
  font-size: 0.6em;
  border: none;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  background: var(--back-dark);
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
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

const SubmitButton = styled.input`
  display: flex;
  margin: 0 auto;
  font-size: 0.8em;
  height: 1.5em;
  width: 80vw;
  background: var(--button-nav);
  color: var(--back-dark);
  border: none;
  border-radius: 25px;
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
`
const CancelButton = styled.input`
  display: flex;
  margin: 0 auto;
  margin-top: 5%;
  font-size: 0.8em;
  height: 1.5em;
  width: 80vw;
  background: rgb(237, 140, 140);
  color: white;
  border: none;
  border-radius: 25px;
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
`
