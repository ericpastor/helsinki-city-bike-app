import { gql, useQuery } from '@apollo/client'
import TableContentStations from './TablesContent/TableContentStations'

const ALL_STATIONS = gql`
query{
    allStations{
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

const StationList = () => {
  const { data, error, loading } = useQuery(ALL_STATIONS)

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <>
      <div className='tables'>{loading ? <p className='info'>loading...</p> : <TableContentStations stations={data.allStations} />}</div>

    </>
  )
}

export default StationList
