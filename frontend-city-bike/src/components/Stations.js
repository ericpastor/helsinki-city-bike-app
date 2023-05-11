import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

const FIND_STATION = gql`
  query($stationNameToSearch: String!){
    findStationByName(name: $stationNameToSearch) {
      name
      namn
      kaupunki
      stad
      osoite
      adress
      kapasiteet
      x
      y
    }
  }
`
const Station = ({ station, onClose }) => {
  return (
    <div>
      <h2>
        {station.name}
      </h2>
      <div>{station.osoite}</div>
      <div>{station.kapasiteet}</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

const Stations = ({ stations }) => {
  const [stationNameToSearch, setStationNameToSearch] = useState(null)
  const result = useQuery(FIND_STATION, {
    variables: { stationNameToSearch },
    skip: !stationNameToSearch
  })

  if (stationNameToSearch && result.data) {
    return (
      <Station
        station={result.data.findStationByName}
        onClose={() => setStationNameToSearch(null)}
      />
    )
  }

  if (stations === null) return null

  return (
    <div>

      {stations &&
              stations.map((station) => (
                <div
                  className='stations'
                  key={station.id}
                  onClick={() => {
                    setStationNameToSearch(station.name)
                  }}
                > <h2>{station.name}</h2>
                </div>
              ))}

    </div>
  )
}

export default Stations
