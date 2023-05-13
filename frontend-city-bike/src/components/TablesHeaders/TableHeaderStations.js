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

const TableHeaderStations = (props) => {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props

  const creatSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  return (

    <TableHead>
      <TableRow>
        <StyledTableCell key='Stations'>
          <TableSortLabel
            active={valueToOrderBy === 'Stations'}
            direction={valueToOrderBy === 'Stations' ? orderDirection : 'asc'}
            onClick={creatSortHandler('name')}
            sx={{ fontWeight: 'bolder', fontSize: 16, fontFamily: 'Montserrat, sans-serif' }}
          >
            Departure
          </TableSortLabel>
        </StyledTableCell>
        <StyledTableCell key='Adress'>
          <TableSortLabel
            active={valueToOrderBy === 'Adress'}
            direction={valueToOrderBy === 'Adress' ? orderDirection : 'asc'}
            onClick={creatSortHandler('osoite')}
            sx={{ fontWeight: 'bolder', fontSize: 16, fontFamily: 'Montserrat, sans-serif' }}
          >
            Adress
          </TableSortLabel>
        </StyledTableCell>
      </TableRow>
    </TableHead>

  )
}

export default TableHeaderStations
