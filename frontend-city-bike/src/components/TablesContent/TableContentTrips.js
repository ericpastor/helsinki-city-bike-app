import { useState } from 'react'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import TableHeaderTrips from '../TablesHeaders/TableHeaderTrips'
import { gql, useQuery } from '@apollo/client'
import {
  StyledPaper,
  StyledTableCell,
  StyledTableContainer
} from '../../styledComponents/StyledLink'

const TRIP_COUNT = gql`
  query Query {
    tripsCount
  }
`

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator (order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const sortedTrips = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((el, index) => [el, index])
  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedRowArray.map((el) => el[0])
}

const TableContentTrips = ({ trips, page, setPage, rowsPerPage }) => {
  const [orderDirection, setOrderDirection] = useState('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState('Departure')
  const { data, loading } = useQuery(TRIP_COUNT)

  if (loading) return <p className='info'>loading...</p>

  const tripsCount = data.tripsCount
  console.log(tripsCount)

  const locale = navigator.language
  const optionsDistance = {
    style: 'unit',
    unit: 'kilometer'
  }
  const optionsTime = {
    style: 'unit',
    unit: 'minute'
  }

  const handleRequestSort = (event, property) => {
    const isAcending = valueToOrderBy === property && orderDirection === 'asc'
    setOrderDirection(isAcending ? 'desc' : 'asc')
    setValueToOrderBy(property)
  }

  if (trips === null) return null

  if (trips.length === 0) {
    return (
      <p className='message-error'>
        Sorry, no trips with this station name. Try again!
      </p>
    )
  }

  return (
    <>
      <StyledPaper>
        <StyledTableContainer>
          <div className='table.container'>
            <Table stickyHeader aria-label='sticky table'>
              <TableHeaderTrips
                valueToOrderBy={valueToOrderBy}
                orderDirection={orderDirection}
                handleRequestSort={handleRequestSort}
              />

              <TableBody>
                {trips &&
                  sortedTrips(
                    trips,
                    getComparator(orderDirection, valueToOrderBy)
                  ).map((trip, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>
                        {trip.departureStationName}
                      </StyledTableCell>
                      <StyledTableCell>
                        {trip.returnStationName}
                      </StyledTableCell>
                      <StyledTableCell>
                        {new Intl.NumberFormat(locale, optionsDistance).format(
                          (trip.coveredDistance / 1000).toFixed(2)
                        )}
                      </StyledTableCell>
                      <StyledTableCell>
                        {new Intl.NumberFormat(locale, optionsTime).format(
                          (trip.duration / 60).toFixed(2)
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </StyledTableContainer>
      </StyledPaper>
      <div className='pagination'>
        <button
          className='pagination-buttons'
          disabled={!page}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <p>Page {page + 1}</p>
        <button
          className='pagination-buttons'
          disabled={rowsPerPage * page >= tripsCount}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  )
}
export default TableContentTrips
