import React from 'react'
import  DashboardPage from '../dashboardPage/DashboardPage'

export default {
  title: 'Rides List',
  component: DashboardPage,
}

const Template = (args) =>
    <DashboardPage {...args}/>   

export const Dashboard = Template.bind({})
