import { useNavigate } from 'react-router-dom'

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
        <p>The App where you'll find information about bike trips <br />
          in Helsiki.
        </p>
      </main>
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
