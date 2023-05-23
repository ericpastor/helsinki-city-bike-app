import { gql, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import TableContentTrips from './TablesContent/TableContentTrips'

const FILTER_TRIPS = gql`
query($departureStationName: String!){
  findTripByDeparture(departureStationName: $departureStationName) {
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

  const [getTrips, { data, loading }] = useLazyQuery(FILTER_TRIPS,
    { variables: { departureStationName: departureInput } })

  if (data === null) { return null }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='search-trip'>
        <h4>Search a Trip</h4>
        <form onSubmit={handleSubmit}>

          <label>Departure Station</label>

          <input type='text' value={departureInput} placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...' onChange={(e) => setDepartureInput(e.target.value)} />

          <button onClick={() => getTrips()}> Search!
          </button>
          {loading && <p>loading...</p>}
          {!departureInput
            ? <p>Choose a departure and return Station</p>
            : <><div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-start', height: '80vh', padding: '50px 0px 20px 10%', backgroundColor: '#1a73e8' }}> {data && <TableContentTrips trips={data.findTripByDeparture} />}</div></>}
        </form>
      </div>
    </>
  )
}

export default FilteredTripList
