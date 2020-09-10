import React from 'react'
import Rides from './RidesList'
import rides from '../data/rides.json'


export default function DashboardPage() {
return ( 
     <>
          <Rides rides={rides} />
     </>
)
}
