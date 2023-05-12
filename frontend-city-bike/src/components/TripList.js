import { gql, useQuery } from '@apollo/client'
import TableContentTrips from './TablesContent/TableContentTrips'

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
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-start', height: '80vh', padding: '50px 0px 20px 10%', backgroundColor: '#1a73e8' }}>{loading ? <p>loading...</p> : <TableContentTrips trips={data.allTrips} />}</div>
    </>
  )
}

export default TripList
