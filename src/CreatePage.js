import axios from 'axios'
import React from 'react'
import styled from 'styled-components/macro'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'

const initialValues = {
  rideTime: '',
  rideDate: '',
  rideFrom: '',
  rideTo: '',
  rideDetails: '',
}

const onSubmit = (value, reset) => {
  reset.resetForm()

  const ride = {
    id_: uuidv4(),
    rideDate: value.rideDate,
    rideTime: value.rideTime,
    rideFrom: value.rideFrom,
    rideTo: value.rideTo,
  }

  console.log('ride', ride)

  axios
    .post('http://localhost:5000/rides/', ride)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error.response))
}

const validationSchema = Yup.object({
  rideDate: Yup.string().required('Bitte Datum eintragen').min(8),

  rideTime: Yup.string().required('Bitte Zeit eintragen').min(5).max(5),

  rideFrom: Yup.string().required('Bitte Abfahrtsort eintragen'),
  rideTo: Yup.string().required('Bitte Ankunftsort eintragen'),
  rideDetails: Yup.string().required('Details bitte hier'),
})

export default function Create() {
  return (
    <>
      <Header>Fahrt anlegen</Header>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validationOnChange={false}
          validateOnBlur={false}
        >
          <Form>
            <LabelStyling htmlFor="rideDate">
              Wann{' '}
              <Field name="rideDate">
                {(props) => {
                  const { field, meta } = props
                  return (
                    <>
                      <StyledInput placeholder="rideDate" {...field} />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
              <Field name="rideTime">
                {(props) => {
                  const { field, meta } = props
                  return (
                    <>
                      <StyledInput placeholder="rideTime" {...field} />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
            </LabelStyling>
            <LabelStyling htmlFor="rideFrom">
              Wohin
              <Field name="rideFrom">
                {(props) => {
                  const { field, meta } = props
                  return (
                    <>
                      <StyledInput placeholder="rideFrom" {...field} />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
              <Field name="rideTo">
                {(props) => {
                  const { field, meta } = props
                  return (
                    <>
                      <StyledInput placeholder="rideTo" {...field} />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
            </LabelStyling>

            <LabelStyling htmlFor="rideDetails">
              Was noch
              <Field name="rideDetails">
                {(props) => {
                  const { field, meta } = props
                  return (
                    <>
                      <StyledInput placeholder="tell me about it" {...field} />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
            </LabelStyling>

            <SubmitButton type="submit" value="Fahrt anlegen"></SubmitButton>
          </Form>
        </Formik>
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
  color: var(--button-nav);
  font-size: 0.8em;
  display: grid;
  text-align: center;
  margin-bottom: 20px;
  padding: 0.8em;
  background: var(--back-light);
  border-radius: 25px;
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
`

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.5em;
  display: grid;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  width: 75vw;
  color: var(--button-nav);
  height: 4em;
  display: flex;
  font-size: 0.6em;
  border: none;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  background: var(--back-dark);
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
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

const SubmitButton = styled.input`
  display: flex;
  margin: 0 auto;
  font-size: 0.8em;
  height: 1.5em;
  width: 80vw;
  background: var(--button-green);
  color: var(--button-nav);
  border: none;
  border-radius: 25px;
  box-shadow: 1px 2px 2px 1px rgba(20, 20, 20, 0.2);
`
