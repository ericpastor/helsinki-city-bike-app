import { useQuery } from '@apollo/client'
import TableContentStations from './TablesContent/TableContentStations'
import { ALL_STATIONS } from '../stations/graphql-queries'

const StationList = () => {
  const { data, error, loading } = useQuery(ALL_STATIONS)

  if (error) return <p className='message-error'>Sorry, something went wrong. Try later...</p>

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
        {error && error}
      </div>
    </>
  )
}

export default StationList
