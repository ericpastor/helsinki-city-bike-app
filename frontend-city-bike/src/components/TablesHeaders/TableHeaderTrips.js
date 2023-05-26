import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import { StyledTableSortLabel } from '../../styledComponents/StyledLink'

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
          <StyledTableSortLabel
            active={valueToOrderBy === 'Departure'}
            direction={valueToOrderBy === 'Departure' ? orderDirection : 'asc'}
            onClick={creatSortHandler('departureStationName')}

          >
            Departure
          </StyledTableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Return'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Return'}
            direction={valueToOrderBy === 'Return' ? orderDirection : 'asc'}
            onClick={creatSortHandler('returnStationName')}

          >
            Return
          </StyledTableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Distance'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Distance'}
            direction={valueToOrderBy === 'Distance' ? orderDirection : 'asc'}
            onClick={creatSortHandler('coveredDistance')}

          >
            Distance
          </StyledTableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Time'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Time'}
            direction={valueToOrderBy === 'Time' ? orderDirection : 'asc'}
            onClick={creatSortHandler('duration')}

          >
            Time
          </StyledTableSortLabel>
        </StyledTableCell>
      </TableRow>
    </TableHead>

  )
}

export default TableHeaderTrips
