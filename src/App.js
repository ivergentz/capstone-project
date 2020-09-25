import React from 'react'
import styled from 'styled-components/macro'
import Navbar from './Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreatePage from './CreatePage'
import SearchPage from './SearchPage'
import DashboardPage from './DashboardPage'

export default function App() {
  return (
    <Pagebody>
      <Router>
        <PageLayout>
          <Switch>
            <Route path="/search" component={SearchPage}></Route>
            <Route path="/create" component={CreatePage}></Route>
            <Route path="/" component={DashboardPage}></Route>
          </Switch>
        </PageLayout>
        <Navbar />
      </Router>
    </Pagebody>
  )
}

const PageLayout = styled.div`
  background: linear-gradient(180deg, var(--back-light), var(--back-dark));
  height: 88vh;
  border-radius: 0 0 40px 40px;
  overflow: scroll;
  scroll-behavior: smooth;
  box-shadow: 1px 2px 2px 1px rgba(0, 51, 0, 0.2);
`

const Pagebody = styled.div`
  background: var(--back-light);
  height: 100vh;
`
