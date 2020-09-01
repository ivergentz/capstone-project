import React from 'react'
import renderer from 'react-test-renderer'
import DashboardPage from './DashboardPage'

test("if renders correctly",() => {
  const component = renderer.create(
    <DashboardPage />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
}) 