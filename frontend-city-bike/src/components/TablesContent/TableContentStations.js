import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import TableHeaderStations from '../TablesHeaders/TableHeaderStations'
import {
  StyledPaper,
  StyledTableContainer
} from '../../styledComponents/StyledLink'

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

const sortedStations = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((el, index) => [el, index])
  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedRowArray.map((el) => el[0])
}

const TableContentStations = ({ stations }) => {
  const [orderDirection, setOrderDirection] = useState('asc')
  const [valueToOrderBy, setValueToOrderBy] = useState('Stations')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

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

  if (stations === null) return null

  return (
    <>
      <StyledPaper>
        <StyledTableContainer>
          <div className='table.container'>
            <Table stickyHeader aria-label='sticky table'>
              <TableHeaderStations
                valueToOrderBy={valueToOrderBy}
                orderDirection={orderDirection}
                handleRequestSort={handleRequestSort}
              />
              <TableBody>
                {stations &&
                  sortedStations(
                    stations,
                    getComparator(orderDirection, valueToOrderBy)
                  )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((station) => (
                      <StyledTableRow key={station.id}>
                        <TableCell>{station.name}</TableCell>
                        <TableCell>{station.osoite}</TableCell>
                        <TableCell>
                          {station.kaupunki === ' '
                            ? 'Helsinki'
                            : station.kaupunki}
                        </TableCell>
                        <TableCell>{station.kapasiteet}</TableCell>
                      </StyledTableRow>
                    ))}
              </TableBody>
            </Table>
          </div>
        </StyledTableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50]}
          component='div'
          count={stations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledPaper>
    </>
  )
}
export default TableContentStations
