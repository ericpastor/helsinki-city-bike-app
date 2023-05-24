import { gql, useQuery } from '@apollo/client'
import TableContentTrips from './TablesContent/TableContentTrips'
import { useState } from 'react'

const ALL_TRIPS = gql`
query AllTrips($offset: Int!, $limit: Int!) {
  allTrips(offset: $offset, limit: $limit) {
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

const TripList = () => {
  const [page, setPage] = useState(0)
  const rowsPerPage = 220

  const { data, error, loading } = useQuery(ALL_TRIPS, {
    variables: {
      limit: rowsPerPage,
      offset: page * rowsPerPage
    }
  })

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-start', height: '80vh', padding: '25px 0px 20px 10%', backgroundColor: '#1a73e8' }}>{loading ? <p>loading...</p> : <TableContentTrips trips={data.allTrips} page={page} setPage={setPage} rowsPerPage={rowsPerPage} />}</div>
    </>
  )
}

export default TripList
