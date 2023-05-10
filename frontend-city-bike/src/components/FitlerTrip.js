import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FilterTrip = () => {
  const [departureInput, setDepartureInput] = useState('')
  const [returnInput, setReturnInput] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleOnClick = () => {
    navigate('/fiteredTrips')
  }

  return (
    <div className='search-trip'>
      <h4>Search a Trip</h4>
      <form onSubmit={handleSubmit}>
        <label>Departure Station</label>
        <input type='text' value={departureInput} placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...' onChange={(e) => setDepartureInput(e.target.value)} />
        <label>Return Station</label>
        <input type='text' value={returnInput} placeholder='Pasilan Asema, Töölöntulli, Teljäntie,...' onChange={(e) => setReturnInput(e.target.value)} />
        <button onClick={handleOnClick}>Go to the list!</button>
      </form>
    </div>
  )
}

export default FilterTrip
