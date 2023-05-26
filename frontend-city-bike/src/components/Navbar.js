import { Toolbar, useTheme, useMediaQuery } from '@mui/material'
import { StyledAppBar, StyledLink, StyledTypography } from '../styledComponents/StyledLink'
import DrawerComponent from './Drawer'
import IconAppBar from '../Icons/IconAppBar'

const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <StyledAppBar>
      <Toolbar>
        <IconAppBar />
        <StyledTypography>Bike Trips - City of Helsinki</StyledTypography>
        {isMobile
          ? (
            <DrawerComponent />
            )
          : (
            <div className='links-navbar'>
              <StyledLink to='/'>Home</StyledLink>
              <StyledLink to='/trips'>Trips</StyledLink>
              <StyledLink to='/stations'>Stations</StyledLink>
              <StyledLink to='/addTrip'>Add a Trip</StyledLink>
            </div>
            )}
      </Toolbar>
    </StyledAppBar>

  )
}

export default Navbar
