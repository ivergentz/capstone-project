import bookedrides from '../src/mocks/bookedrides.json'

import { loadFromLocal, saveToLocal } from './localStorage'

export function getBookedRide() {
  return loadFromLocal('bookedrides').catch((error) => {
    return bookedrides
  })
}

