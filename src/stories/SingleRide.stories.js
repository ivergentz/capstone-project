import React from 'react'
import  ListItem from '../dashboardPage/RidesListItem'
import rides from '../mocks/rides.json'

export default {
  title: 'Single Ride',
  component: ListItem,
}

const Template = (args) => 
    
    <ListItem {...args}/>
   
   
const [rideProps] = rides

export const Ride = Template.bind({})
Ride.args = {
  ...rideProps
}