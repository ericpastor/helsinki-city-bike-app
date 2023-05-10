import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import Stations from './Stations'

const ALL_STATIONS = gql`
query($limit: Int!, $offset: Int){
    allStations(limit: $limit, offset: $offset) {
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
const PAGE_SIZE = 1
const StationList = () => {
  const [page, setPage] = useState(0)
  const { data, error, loading } = useQuery(ALL_STATIONS, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE
    }
  })

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <>
      <div>{loading ? <p>loading...</p> : <Stations stations={data.allStations} />}</div>
      <button disabled={!page} onClick={() => setPage(prev => prev - 1)}>Previous</button>
      <span>Page {page + 1}</span>
      <button disabled={page === 4} onClick={() => setPage(prev => prev + 1)}>Next</button>
    </>
  )
}

export default StationList
