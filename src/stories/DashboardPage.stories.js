import React from 'react'
import  DashboardPage from '../dashboardPage/DashboardPage'

export default {
  title: 'Dashboard',
  component: DashboardPage,
}

const Template = (args) =>
    <DashboardPage {...args}/>   

export const Dashboard = Template.bind({});
