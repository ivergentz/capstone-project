import React from 'react'
import NavBar from '../Navigation'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Buttons',
  component: NavBar,
}

export const NavigationBar = () => (
  <Router>
    <NavBar />
  </Router>
)
