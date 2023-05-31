import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import StationDetails from './StationDetails'
import { SEARCH_STATION } from '../stations/graphql-queries'

const SearchStations = () => {
  const [nameInput, setNameInput] = useState('')

  const [getStation, { data, loading, error }] = useLazyQuery(SEARCH_STATION, {
    variables: {
      osoite: nameInput
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
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>address:</label>
          <input
            type='text'
            value={nameInput}
            placeholder='Kaivokatu, Töölönkatu, Teljäntie,...'
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
              {data && <StationDetails station={Object.values(data)} />}
              {error && error}
            </div>
          </>
          )}
    </div>
  )
}

export default SearchStations
