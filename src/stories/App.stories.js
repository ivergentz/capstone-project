import React from 'react'
import  App from '../App'

export default {
  title: 'Application',
  component: App,
}

const Template = (args) => <App {...args}/>

export const WholeApp = Template.bind({});
