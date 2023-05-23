import { useState } from 'react'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHeaderTrips from '../TablesHeaders/TableHeaderTrips'

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

const TableContentTrips = ({ trips }) => {
  const [orderDirection, setOrderDirection] = useState('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState('Departure')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  if (trips === null) return null

  return (
    <>
      <Paper sx={{ width: '90%', overflow: 'hidden', marginBottom: '20' }}>
        <TableContainer>
          <div style={{ height: '350px', overflow: 'auto' }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHeaderTrips
                valueToOrderBy={valueToOrderBy}
                orderDirection={orderDirection}
                handleRequestSort={handleRequestSort}
              />

              <TableBody>
                {trips &&
                    sortedTrips(trips, getComparator(orderDirection, valueToOrderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component='div'
          count={trips.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
export default TableContentTrips
