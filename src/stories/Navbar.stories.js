import React from 'react'
import Navbar from '../navigation/Navigation'


export default {
  title: 'Navigation',
  component: Navbar,
}

const Template = (args) => 
    
    <NavBar {...args} />
   
export const Navbar = Template.bind({})
