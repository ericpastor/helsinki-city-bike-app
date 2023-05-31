import { useQuery } from '@apollo/client'
import TableContentTrips from './TablesContent/TableContentTrips'
import { useState } from 'react'
import { ALL_TRIPS } from '../trips/graphql-queries'

const TripList = () => {
  const [page, setPage] = useState(0)
  const rowsPerPage = 220

  const { data, error, loading } = useQuery(ALL_TRIPS, {
    variables: {
      limit: rowsPerPage,
      offset: page * rowsPerPage
    }
  })

  if (error) return <p className='message-error'>Sorry, something went wrong. Try later...</p>

  return (
    <>
      <div className='tables'>
        {loading
          ? (
            <p className='info'>loading...</p>
            )
          : (
            <TableContentTrips
              trips={data.allTrips}
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
            />
            )}
        {error && error}
      </div>
    </>
  )
}

export default TripList
