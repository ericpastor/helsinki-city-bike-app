import { gql, useQuery } from '@apollo/client'
import Trips from './Trips'

const ALL_TRIPS = gql`
  query {
    allTrips {
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
  const { data, error, loading } = useQuery(ALL_TRIPS)

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <div>{loading ? <p>loading...</p> : <Trips trips={data.allTrips} />}</div>
  )
}

export default TripList
