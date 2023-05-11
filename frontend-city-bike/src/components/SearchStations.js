import { gql, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import StationDetails from './StationDetails'

const SEARCH_STATION = gql`
    query($name: String!){
        findStationByName(name: $name) {
        fid
        id
        nimi
        namn
        name
        osoite
        adress
        kaupunki
        stad
        operaator
        kapasiteet
        x
        y
        }
    }
`

const SearchStations = () => {
  const [nameInput, setNameInput] = useState('')

  const [getStation, { data }] = useLazyQuery(SEARCH_STATION, {
    variables: {
      name: nameInput
    }
  })

  if (data === null) { return null }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <h4>Search a Station</h4>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setNameInput(e.target.value)} />
        <button onClick={() => getStation()}> Search!
        </button>
        {!nameInput

          ? <p>Choose your station</p>

          : <><div> {data && <StationDetails station={Object.values(data)} />}</div></>}
      </form>
    </div>
  )
}

export default SearchStations
