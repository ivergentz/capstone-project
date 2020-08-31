import React from 'react';
import styled from 'styled-components'
import DashboardPage from './dashboardPage/DashboardPage'

export default function App() {
  return ( 
  <>
    <PageLayout>
      <DashboardPage />
    </PageLayout>
  </>
  )
}


const PageLayout = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  margin: 0;
  background: black;
`  