import axios from 'axios'
import { useEffect, useState } from 'react'

export default function getRides() {
  const [rides, setRides] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/rides')
      .then((response) => {
        setRides(response.data)
      })
      .catch(function (error) {
        console.log(error.response.data)
      })
  }, [])
  return { rides }
}
