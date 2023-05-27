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

const TableHeaderStations = (props) => {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props

  const creatSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell key='Stations'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Stations'}
            direction={valueToOrderBy === 'Stations' ? orderDirection : 'asc'}
            onClick={creatSortHandler('name')}
          >
            Station
          </StyledTableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='Address'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Address'}
            direction={valueToOrderBy === 'Address' ? orderDirection : 'asc'}
            onClick={creatSortHandler('osoite')}
          >
            Address
          </StyledTableSortLabel>
        </StyledTableCell>

        <StyledTableCell key='City'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'City'}
            direction={valueToOrderBy === 'City' ? orderDirection : 'asc'}
            onClick={creatSortHandler('kaupunki')}
          >
            City
          </StyledTableSortLabel>
        </StyledTableCell>
        <StyledTableCell key='Capacity'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Capacity'}
            direction={valueToOrderBy === 'Capacity' ? orderDirection : 'asc'}
            onClick={creatSortHandler('kapasiteet')}
          >
            Capacity
          </StyledTableSortLabel>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeaderStations
