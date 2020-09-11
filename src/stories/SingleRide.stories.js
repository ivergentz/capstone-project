import React from 'react'
import  ListItem from '../dashboardPage/RidesListItem'
<<<<<<< HEAD
import rides from '../mocks/rides.json'
=======
import rides from '../data/rides.json'

>>>>>>> master

export default {
  title: 'Single Ride',
  component: ListItem,
}

const Template = (args) => 
    
    <ListItem {...args} />
   
<<<<<<< HEAD
const [rideProps] = rides
=======
 const [rideProps] = rides
>>>>>>> master

export const Ride = Template.bind({})
Ride.args = {
  ...rideProps
<<<<<<< HEAD
}
=======
}
>>>>>>> master
