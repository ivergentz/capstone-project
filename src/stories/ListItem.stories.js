import React from 'react'
import  ListItem from '../dashboardPage/ListItem'
import GlobalStyles from '../GlobalStyles'


export default {
  title: 'Rides',
  component: ListItem,
}

const Template = (args) => 
    <ListItem {...args}/> 

export const Item = Template.bind({});
