// import axios from 'axios'
import React from 'react'
import styled from 'styled-components/macro'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  rideTime: '',
  rideDate: '',
  rideFrom: '',
  rideTo: '',
  rideDetails: '',

  //pass in initial values - must match form-attribute (to, from, time, date)
}

const onSubmit = (values, reset) => {
  reset.resetForm()
  // console.log('Form data', values)
  //hier muss die Logik des schreiben in die Datenbank rein, glaube ich
}

const validationSchema = Yup.object({
  rideDate: Yup.string().required('Bitte Datum eintragen'),
  rideTime: Yup.string().required('Bitte Zeit eintragen'),
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
                  const { field, form, meta } = props
                  return (
                    <>
                      <StyledInput
                        id="rideDate"
                        placeholder="rideDate"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
              <Field name="rideTime">
                {(props) => {
                  const { field, form, meta } = props
                  return (
                    <>
                      <StyledInput
                        id="rideTime"
                        placeholder="rideTime"
                        {...field}
                      />
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
                  const { field, form, meta } = props
                  return (
                    <>
                      <StyledInput
                        id="rideFrom"
                        placeholder="rideFrom"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
              <Field name="rideTo">
                {(props) => {
                  const { field, form, meta } = props
                  return (
                    <>
                      <StyledInput
                        id="rideTo"
                        placeholder="rideTo"
                        {...field}
                      />
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
              <Field name="rideDetails" placeholder="tell me about it">
                {(props) => {
                  const { field, form, meta } = props
                  return (
                    <>
                      <StyledInput id="rideDetails" {...field} />
                      {meta.touched && meta.error ? (
                        <ErrorMsg>{meta.error}</ErrorMsg>
                      ) : null}
                    </>
                  )
                }}
              </Field>
            </LabelStyling>
            {/* 
            <div>
              <label htmlFor="moreDetails">
                Hier die "normale Version des einbindens"
              </label>
              <Field type="text" name="moreDetails" />
            </div> */}

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

// const handleSubmit = (event) => {
//   event.preventDefault()

//   const ride = {
//     rideDate: formik.value.rideDate,
//     rideTime: formik.value.rideTime,
//     rideFrom: formik.value.rideFrom,
//     rideTo: formik.value.rideTo,
//   }

//   axios
//     .post('http://localhost:5000/rides/', ride)
//     .then((res) => console.log(res.data))

//   window.location = '/create'
// }

// const formik = useFormik({
//   initialValues,
//   onSubmit,
//   // validate,
//   validationSchema,
// })
// console.log('Form visited', formik.touched)
