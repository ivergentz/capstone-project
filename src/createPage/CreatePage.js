import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import SetTime from './SetTime'

export default function Create() {
  const [rideDate, setRideDate] = useState('')
  const [rideTime, setRideTime] = useState('')
  const [rideFrom, setRideFrom] = useState('')
  const [rideTo, setRideTo] = useState('')
  const [kind, setKind] = useState('')

  const { register, handleSubmit, errors } = useForm()

  const todaysDate = new Date()

  const onSubmit = () => {
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
          name="createForm"
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setKind('angebotene Fahrt')}
        >
          <LabelStyling>
            Wann willst du fahren?
            <InputDetails
              id="datePicker"
              type="date"
              name="rideDate"
              placeholder="dd-mm-yyyy"
              ref={register({ required: true })}
              value={rideDate}
              onChange={(date) => setRideDate(date.target.value)}
            />
            {errors.rideDate && errors.rideDate.type === 'required' && (
              <ErrorMsg>
                Bitte trage ein gültiges Datum ein (TT.MM.JJJJ)
              </ErrorMsg>
            )}
            <SetTime
              name="rideTime"
              ref={register({ required: true })}
              type="time"
              value={rideTime}
            />
            {errors.rideTime && errors.rideTime.type === 'required' && (
              <ErrorMsg>Bitte trage eine gültige Zeit ein (SS:MM)</ErrorMsg>
            )}
          </LabelStyling>
          <LabelStyling>
            Wohin willst du fahren?
            <InputDetails
              name="rideFrom"
              ref={register({ required: true, minLength: 4 })}
              placeholder="Ab"
              value={rideFrom || ''}
              onChange={(from) => setRideFrom(from.target.value)}
            />
            {errors.rideFrom && errors.rideFrom.type === 'required' && (
              <ErrorMsg>Bitte trage ein gültigen Abfahrtsort an</ErrorMsg>
            )}
            {errors.rideFrom && errors.rideFrom.type === 'minLength' && (
              <ErrorMsg>Bitte trage ein gültigen Abfahrtsort an</ErrorMsg>
            )}
            <InputDetails
              name="rideTo"
              ref={register({ required: true, minLength: 3 })}
              placeholder="Nach"
              type="text"
              value={rideTo}
              onChange={(to) => setRideTo(to.target.value)}
            />
            {errors.rideTo && errors.rideTo.type === 'required' && (
              <ErrorMsg>Bitte trage einen gültigen Ankunftsort an</ErrorMsg>
            )}
            {errors.rideTo && errors.rideTo.type === 'minLength' && (
              <ErrorMsg>Bitte trage ein gültigen Ankunftsort an</ErrorMsg>
            )}
          </LabelStyling>
          <SubmitButton type="submit" value="Fahrt anlegen"></SubmitButton>
        </form>
        <CancelButton type="reset" value="Eingaben löschen"></CancelButton>
      </Container>
    </>
  )
}

const ErrorMsg = styled.h4`
  display: grid;
  font-size: 0.5em;
  color: red;
`

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
  width: 50vw;
  color: white;
  display: flex;
  font-size: 0.6em;
  border: none;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  background: var(--back-dark);
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
  justify-content: center;
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
  z-index: 100;
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
