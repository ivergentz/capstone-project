import React from 'react';
import styled from 'styled-components'
import DashboardPage from './dashboardPage/DashboardPage'

export default function App() {
  return ( 
  <Pagebody>
    <PageLayout>
      <DashboardPage />
    </PageLayout>
  </Pagebody>
  )
}

const PageLayout = styled.div`
  position: relative;
  background: linear-gradient(180deg, var(--back-light), var(--back-dark));
  height: 88vh; 
  border-radius: 0 0 40px 40px;
  overflow: scroll;
  scroll-behavior: smooth;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
` 

const Pagebody = styled.div`
  background: var(--back-light);
  height: 100vh;
 
`