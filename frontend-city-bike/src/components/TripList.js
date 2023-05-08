import { gql, useQuery } from '@apollo/client'
import Trips from './Trips'
import { useState } from 'react'

const ALL_TRIPS = gql`
  query($limit: Int!, $offset: Int!) {
    allTrips(limit: $limit, offset: $offset) {
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
const TripList = () => {
  const [page, setPage] = useState(0)
  const { data, error, loading } = useQuery(ALL_TRIPS, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE
    }
  })

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <>
      <div>{loading ? <p>loading...</p> : <Trips trips={data.allTrips} />}</div>
      <button disabled={!page} onClick={() => setPage(prev => prev - 1)}>Previous</button>
      <span>Page {page + 1}</span>
      <button onClick={() => setPage(prev => prev + 1)}>Next</button>
    </>
  )
}

export default TripList
