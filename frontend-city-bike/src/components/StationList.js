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
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-start', height: '80vh', padding: '50px 0px 20px 10%', backgroundColor: '#1a73e8' }}>{loading ? <p>loading...</p> : <TableContentStations stations={data.allStations} />}</div>

    </>
  )
}

export default StationList
