import { gql, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import StationDetails from './StationDetails'

const SEARCH_STATION = gql`
    query($osoite: String!){
        findStationByName(osoite: $osoite) {
        fid
        id
        nimi
        namn
        name
        osoite
        adress
        kaupunki
        stad
        operaattor
        kapasiteet
        x
        y
        }
    }
`

const SearchStations = () => {
  const [nameInput, setNameInput] = useState('')

  const [getStation, { data, loading }] = useLazyQuery(SEARCH_STATION, {
    variables: {
      osoite: nameInput
    }
  })

  if (data === null) { return null }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>adress:</label>
          <input
            type='text'
            value={nameInput}
            placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...'
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button onClick={() => getStation()}> Search!</button>
        </div>
      </form>
      {!nameInput
        ? (
          <p className='info'>type the street name and search...</p>
          )
        : (
          <>
            <div>
              {loading && <p className='info'>loading...</p>}
              {data &&
                <StationDetails station={Object.values(data)} />}
            </div>
          </>)}
    </div>
  )
}

export default SearchStations
