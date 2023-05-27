import {
  AppBar,
  Grid,
  Typography,
  Paper,
  TableContainer,
  TableCell,
  TableSortLabel
} from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  color: #5f6368;
  text-decoration: none;
  background-color: white;
  color: #5f6368;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    color: coral;
  }
`

export const StyledAppBar = styled(AppBar)`
  background-color: white;
`

export const StyledTypography = styled(Typography)`
  color: #5f6368;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`
export const StyledGrid = styled(Grid)`
  margin-left: 60px;
  margin-right: 30px;
  color: white;
  background-color: #1a73e8;
  font-family: 'Montserrat', sans-serif;
`

export const StyledPaper = styled(Paper)`
  width: 90%;
  marginbottom: 20;
  overflow: visible;
`

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 4px;
  height: 480px;
  @media screen and (max-width: 570px) {
    height: 700px;
  }
`
export const StyledTableCell = styled(TableCell)`
  @media screen and (max-width: 570px) {
    font-size: 10px;
  }
`
export const StyledTableSortLabel = styled(TableSortLabel)`
  font-weight: bolder;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 570px) {
    font-size: 12px;
  }
`
