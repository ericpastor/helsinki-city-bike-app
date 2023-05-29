import { useQuery } from '@apollo/client'
import TableContentStations from './TablesContent/TableContentStations'
import { ALL_STATIONS } from '../stations/graphql-queries'

const StationList = () => {
  const { data, error, loading } = useQuery(ALL_STATIONS)

  if (error) return <span style={{ color: 'red' }}>{error}</span>

  return (
    <>
      <div className='tables'>
        {loading
          ? (
            <p className='info'>loading...</p>
            )
          : (
            <TableContentStations stations={data.allStations} />
            )}
      </div>
    </>
  )
}

export default StationList
