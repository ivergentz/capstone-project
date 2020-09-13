import React from 'react';
import styled from 'styled-components/macro'
import Navbar from './navigation/Navigation'
import {
  BrowserRouter as Router,
Route, 
Switch,
} from "react-router-dom"
import CreatePage from './create/CreatePage'
import SearchPage from './search/SearchPage'
import DashboardPage from './dashboardPage/DashboardPage';

  export default function App() {
  return ( 
    
  <Pagebody>
    <Router>
      <PageLayout>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
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
  box-shadow: 1px 2px 2px 2px rgba(37, 37, 43, 0.9);
` 

const Pagebody = styled.div`
  background: var(--back-light);
  height: 100vh;
 
`
