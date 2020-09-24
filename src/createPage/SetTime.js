import { TimePicker } from 'antd'
import 'antd/dist/antd.css'
import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

export default function SetTime(props) {
  const format = 'HH:mm'
  return (
    <TimeContainer>
      <TimePicker
        {...props}
        defaultValue={moment('12:08', format)}
        format={format}
      />
    </TimeContainer>
  )
}

const TimeContainer = styled.div`
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
