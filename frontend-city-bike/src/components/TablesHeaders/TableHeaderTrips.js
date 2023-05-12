import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'
import { styled } from '@mui/material/styles'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffc107',
    color: theme.palette.common.white
  }
}))

const TableHeaderTrips = (props) => {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props

  const creatSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  return (

    <TableHead>
      <TableRow>
        <StyledTableCell key='Departure'>
          <TableSortLabel
            active={valueToOrderBy === 'Departure'}
            direction={valueToOrderBy === 'Departure' ? orderDirection : 'asc'}
            onClick={creatSortHandler('departureStationId')}
            sx={{ fontWeight: 'bolder', fontSize: 16, fontFamily: 'Montserrat, sans-serif' }}
          >
            Departure
          </TableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Return'>
          <TableSortLabel
            active={valueToOrderBy === 'Return'}
            direction={valueToOrderBy === 'Return' ? orderDirection : 'asc'}
            onClick={creatSortHandler('returnStationName')}
            sx={{ fontWeight: 'bolder', fontSize: 16, fontFamily: 'Montserrat, sans-serif' }}
          >
            Return
          </TableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Distance'>
          <TableSortLabel
            active={valueToOrderBy === 'Distance'}
            direction={valueToOrderBy === 'Distance' ? orderDirection : 'asc'}
            onClick={creatSortHandler('coveredDistance')}
            sx={{ fontWeight: 'bolder', fontSize: 16, fontFamily: 'Montserrat, sans-serif' }}
          >
            Distance
          </TableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Time'>
          <TableSortLabel
            active={valueToOrderBy === 'Time'}
            direction={valueToOrderBy === 'Time' ? orderDirection : 'asc'}
            onClick={creatSortHandler('duration')}
            sx={{ fontWeight: 'bolder', fontSize: 16, fontFamily: 'Montserrat, sans-serif' }}
          >
            Time
          </TableSortLabel>
        </StyledTableCell>
      </TableRow>
    </TableHead>

  )
}

export default TableHeaderTrips
