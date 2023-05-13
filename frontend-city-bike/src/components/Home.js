import { useNavigate } from 'react-router-dom'
import IconBikeFast from '../Icons/IconBikeFast'

const Home = () => {
  const navigate = useNavigate()

  const handleClickTrip = () => {
    navigate('/searchTrip')
  }
  const handleClickStation = () => {
    navigate('/stationDetails')
  }

  return (
    <div className='home'>
      <main>
        <h1>
          Welcome to the City Bike App!
        </h1>
        <p>Here you will find information about bike trips <br />
          in Helsinki. Departure stations, return stations, <br />
          distances, trip time, and more...
        </p>
      </main>
      <IconBikeFast />
      <section className='options'>
        <div>
          <button className='button-options' onClick={handleClickTrip}>Search a trip!</button>
          <button className='button-options' onClick={handleClickStation}>Search a Station!</button>
        </div>
      </section>
    </div>
  )
}

export default Home
