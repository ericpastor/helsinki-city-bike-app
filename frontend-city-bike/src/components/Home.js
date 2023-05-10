import FilterTrip from './FitlerTrip'

const Home = () => {
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

          <FilterTrip />
          <button className='button-options'>List of trips </button>
        </div>
      </section>
    </div>
  )
}

export default Home
