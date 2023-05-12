import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import TableContentTrips from './TablesContent/TableContentTrips'

const FILTERED_TRIPS = gql`
query ( $departureStationName: String, $returnStationName: String ){
    allTrips (departureStationName: $departureStationName, returnStationName: $returnStationName) {
      departure
      return
      departureStationName
      departureStationId
      returnStationName
      returnStationId
      coveredDistance
      duration
    }
  }
`

const FilteredTripList = () => {
  const [departureInput, setDepartureInput] = useState('')
  const [returnInput, setReturnInput] = useState('')

  const { data, error, loading } = useQuery(FILTERED_TRIPS,
    { variables: { departureStationName: departureInput, returnStationName: returnInput } })

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <>
      <div className='search-trip'>
        <h4>Search a Trip</h4>

        <label>Departure Station</label>
        <input type='text' value={departureInput} placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...' onChange={(e) => setDepartureInput(e.target.value)} />

        <label>Return Station</label>
        <input type='text' value={returnInput} placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...' onChange={(e) => setReturnInput(e.target.value)} />

      </div>

      {!departureInput || !returnInput
        ? <p>Choose a departure and return Station</p>
        : <><div>{loading ? <p>loading...</p> : <TableContentTrips trips={data.allTrips} />}</div></>}

    </>
  )
}

export default FilteredTripList
