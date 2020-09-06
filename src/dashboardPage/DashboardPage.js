import React from 'react'
import Rides from './RidesList'
import Search from '../search/Search'
import rides from '../mocks/rides.json'



export default function DashboardPage() {
return ( 
     <>
     <Search />
     <Rides rides={rides} />
     </>
)
}


 