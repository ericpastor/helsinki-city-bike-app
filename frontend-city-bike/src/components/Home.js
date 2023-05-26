import { useNavigate } from 'react-router-dom'
import IconBikeFast from '../Icons/IconBikeFast'
import { Grid } from '@mui/material'
import { StyledGrid } from '../styledComponents/StyledLink'

const Home = () => {
  const navigate = useNavigate()

  const handleClickTrip = () => {
    navigate('/searchTrip')
  }
  const handleClickStation = () => {
    navigate('/stationDetails')
  }

  return (
    <Grid sx={{ marginTop: '50px' }} container spacing={2}>
      <StyledGrid item xs={8}>
        <div>
          <h1>
            Welcome to the City Bike App!
          </h1>
          <p>
            Here you will find information about bike trips in Helsinki. <br /> Departure stations, return stations, distances, trip time, and more...
          </p>
        </div>
      </StyledGrid>
      <Grid item xs={3} sx={{ marginLeft: '120px' }}>
        <IconBikeFast />
      </Grid>
      <div className='section-buttons'>

        <button className='button-options' onClick={handleClickTrip}>Search a trip!</button>

        <button className='button-options' onClick={handleClickStation}>Search a Station!</button>

      </div>
    </Grid>
  )
}

export default Home
