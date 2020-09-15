import React from 'react'
import styled from 'styled-components/macro'

export default function Create() {
  return (
    <>
      <Header>Neue Fahrt</Header>
      <InputSection>
        <InputTime>
          <h2>Wann willst du fahren?</h2>
          <InputRideDetails placeholder="Datum"></InputRideDetails>
          <InputRideDetails placeholder="Uhrzeit"></InputRideDetails>
        </InputTime>
        <InputDirection>
          <h2>Wohin soll es gehen?</h2>
          <InputRideDetails placeholder="Abfahrtsbahnhof"></InputRideDetails>
          <InputRideDetails placeholder="nach"></InputRideDetails>
        </InputDirection>
        <InputMoreDetails>
          <h2>Mache ein Angebot:</h2>
          <InputRideDetails placeholder="weitere Details zur Fahrt"></InputRideDetails>
        </InputMoreDetails>
        <SubmitButton>Submit</SubmitButton>
        <CancelButton>back</CancelButton>
      </InputSection>
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
const InputSection = styled.section`
  margin-top: 25%;

  input {
    background: none;
    border: 0.2px solid var(--back-dark);
  }

  h2 {
    color: var(--button-nav);
    width: 85%;
    padding-top: 0.7em;
    font-size: 0.7em;
    margin-left: 20px;
  }
`

const InputRideDetails = styled.input`
  height: 1.5em;
  color: black;
  padding-top: 20px;
  display: grid;
  font-size: 0.8em;
  margin: 20px;
  margin-bottom: 20px;
  width: 85%;
`

const InputTime = styled.form`
  background: var(--back-light);
  margin-bottom: 20px;
  width: 85%;
  border-radius: 0 25px 25px 0;
  padding-bottom: 10px;
`
const InputDirection = styled.form`
  background: var(--back-light);
  padding-bottom: 10px;
  border-radius: 25px 0 0 25px;
  width: 85%;
  margin: 0px 0 0 15vw;
  margin-bottom: 20px;
`

const InputMoreDetails = styled.form`
  background: var(--back-light);
  margin-bottom: 20px;
  width: 85%;
  border-radius: 0 25px 25px 0;
  padding-bottom: 10px;
`

const SubmitButton = styled.button`
  border: none;
  border-radius: 25px;
`
const CancelButton = styled.button`
  background: red;
  margin-bottom: 10vh;
`
