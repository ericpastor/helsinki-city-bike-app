import { StyledLink } from '../styledComponents/StyledLink'

const Navbar = () => {
  return (
    <div className='bike-trips'>
      <h2>Bike Trips - City of Helsinki</h2>
      <div className='links-navbar'>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/trips'>Trips</StyledLink>
        <StyledLink to='/stations'>Stations</StyledLink>
        <StyledLink to='/addTrip'>Add a Trip</StyledLink>
      </div>
    </div>
  )
}

export default Navbar
