import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import TableContentTrips from './TablesContent/TableContentTrips'
import { FILTER_TRIPS } from '../trips/graphql-queries'

const FilteredTripList = () => {
  const [departureInput, setDepartureInput] = useState('')
  const [page, setPage] = useState(0)

  const rowsPerPage = 1000
  const [getTrips, { data, loading, error }] = useLazyQuery(FILTER_TRIPS, {
    variables: {
      departureStationName: departureInput,
      limit: rowsPerPage,
      offset: page * rowsPerPage
    }
  })

  if (data === null) {
    return null
  }

  if (error) return <p className='message-error'>Sorry, something went wrong. Try later...</p>

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Departure Station:</label>
            <input
              type='text'
              value={departureInput}
              placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...'
              onChange={(e) => setDepartureInput(e.target.value)}
            />
            <button id='search-trips' onClick={() => getTrips()}> Search!</button>
          </div>
        </form>
        {!departureInput
          ? (
            <p className='info'>choose a departure station...</p>
            )
          : (
            <>
              <div className='tables' style={{ marginTop: '0px' }}>
                {loading && <p className='info'>loading...</p>}
                {data && (
                  <TableContentTrips
                    trips={data.findTripByDeparture}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                  />
                )}
                {error && error}
              </div>
            </>
            )}
      </div>
    </>
  )
}

export default FilteredTripList
