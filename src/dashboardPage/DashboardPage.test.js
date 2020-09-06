import React from 'react'
import renderer from 'react-test-renderer'
import DashboardPage from './DashboardPage'

it('renders correctly', () => {
  const tree = renderer
    .create(<DashboardPage />)
  
  expect(tree).toMatchSnapshot();
})
