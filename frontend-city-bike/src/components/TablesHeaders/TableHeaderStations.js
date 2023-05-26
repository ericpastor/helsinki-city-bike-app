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
            Departure
          </StyledTableSortLabel>
        </StyledTableCell>
        <StyledTableCell key='Adress'>
          <StyledTableSortLabel
            active={valueToOrderBy === 'Adress'}
            direction={valueToOrderBy === 'Adress' ? orderDirection : 'asc'}
            onClick={creatSortHandler('osoite')}
          >
            Adress
          </StyledTableSortLabel>
        </StyledTableCell>
      </TableRow>
    </TableHead>

  )
}

export default TableHeaderStations
