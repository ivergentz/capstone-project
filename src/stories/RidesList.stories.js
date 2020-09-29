import React from 'react'
import AllRides from '../AllRides'

export default {
  title: 'Rides List',
  component: AllRides,
}

const Template = (args) => <AllRides {...args} />

export const RidesList = Template.bind({})
