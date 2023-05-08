import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

const FIND_TRIP = gql`
  query ($stationToSearch: String!) {
    findTripByDeparture(departureStationName: $stationToSearch) {
      departure
      return
      departureStationName
      returnStationName
      coveredDistance
      duration
    }
  }
`
const Trip = ({ trip, onClose }) => {
  return (
    <div>
      <h2>
        {trip.departureStationName} to {trip.returnStationName}
      </h2>
      <div>{trip.coveredDistance}</div>
      <div>{trip.duration}</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

const locale = navigator.language

const optionsDistance = {
  style: 'unit',
  unit: 'kilometer'
}
const optionsTime = {
  style: 'unit',
  unit: 'minute'
}

const Trips = ({ trips }) => {
  const [stationToSearch, setStationToSearch] = useState(null)
  const result = useQuery(FIND_TRIP, {
    variables: { stationToSearch },
    skip: !stationToSearch
  })

  if (stationToSearch && result.data) {
    return (
      <Trip
        trip={result.data.findTripByDeparture}
        onClose={() => setStationToSearch(null)}
      />
    )
  }

  if (trips === null) return null

  return (
    <div>
      <div className='columns'>
        <table>
          <tbody>
            <tr>
              <th>Departure</th>
              <th>Return</th>
              <th>Distance</th>
              <th>Time</th>
            </tr>
            {trips &&
              trips.map((trip) => (
                <tr
                  className='trips'
                  key={trip.departureStationId}
                  onClick={() => {
                    setStationToSearch(trip.departureStationName)
                  }}
                >
                  <td className='departure'>{trip.departureStationName}</td>
                  <td>{trip.returnStationName}</td>
                  <td>
                    {new Intl.NumberFormat(locale, optionsDistance).format(
                      trip.coveredDistance / 1000
                    )}
                  </td>
                  <td>
                    {new Intl.NumberFormat(locale, optionsTime).format(
                      trip.duration / 60
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Trips
