import { useState } from 'react'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHeaderTrips from '../TablesHeaders/TableHeaderTrips'
import { gql, useQuery } from '@apollo/client'

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

  if (loading) return <p>loading...</p>

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

  return (
    <>
      <Paper sx={{ width: '90%', marginBottom: '20', overflow: 'visible' }}>

        <TableContainer sx={{ height: '480px' }}>
          <div style={{ height: '100px' }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHeaderTrips
                valueToOrderBy={valueToOrderBy}
                orderDirection={orderDirection}
                handleRequestSort={handleRequestSort}
              />

              <TableBody>

                {trips &&
                    sortedTrips(trips, getComparator(orderDirection, valueToOrderBy))
                      .map((trip, index) => (
                        <StyledTableRow key={index}>
                          <TableCell>
                            {trip.departureStationName}
                          </TableCell>
                          <TableCell>
                            {trip.returnStationName}
                          </TableCell>
                          <TableCell>
                            {new Intl.NumberFormat(locale, optionsDistance).format(
                              (trip.coveredDistance / 1000).toFixed(2)
                            )}
                          </TableCell>
                          <TableCell>
                            {new Intl.NumberFormat(locale, optionsTime).format(
                              (trip.duration / 60).toFixed(2)
                            )}
                          </TableCell>
                        </StyledTableRow>
                      ))}

              </TableBody>

            </Table>
          </div>

        </TableContainer>
      </Paper>
      <div>
        <button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        <span>Page {page + 1}</span>
        <button disabled={rowsPerPage * page >= tripsCount} onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  )
}
export default TableContentTrips
