import { gql, useQuery } from '@apollo/client'
import Trips from './Trips'
import { useState } from 'react'

const FILTERED_TRIPS = gql`
query($offset: Int, $limit: Int!, $departureStationName: String, $returnStationName: String, ){
    allTrips(offset: $offset, limit: $limit, departureStationName: $departureStationName, returnStationName: $returnStationName) {
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

const PAGE_SIZE = 2

const FilteredTripList = () => {
  const [departureInput, setDepartureInput] = useState('')
  const [returnInput, setReturnInput] = useState('')
  const [page, setPage] = useState(0)

  const { data, error, loading } = useQuery(FILTERED_TRIPS,
    { variables: { limit: PAGE_SIZE, offset: page * PAGE_SIZE, departureStationName: departureInput, returnStationName: returnInput } })

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
        : <><div>{loading ? <p>loading...</p> : <Trips trips={data.allTrips} />}</div><button disabled={!page} onClick={() => setPage(prev => prev - 1)}>Previous</button><span>Page {page + 1}</span><button onClick={() => setPage(prev => prev + 1)}>Next</button></>}

    </>
  )
}

export default FilteredTripList
