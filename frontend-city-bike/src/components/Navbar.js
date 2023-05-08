import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bike-trips'>
      <h2>Bike Trips - City of Helsinki</h2>
      <div className='links-navbar'>
        <Link to='/'>Home</Link>
      </div>
    </div>
  )
}

export default Navbar
