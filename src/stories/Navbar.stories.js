import React from 'react'
import NavBar from '../navigation/Navigation'
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
