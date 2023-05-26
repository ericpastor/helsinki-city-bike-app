const StationDetails = ({ station }) => {
  let stationFound = []
  try {
    stationFound = Object.values(station).map((s) => {
      return <ul className='station-details' key={s.id}><li>name: <span>{s.name}</span></li><li>adress: <span>{s.osoite}</span></li><li> city: <span>{s.kaupunki === ' ' ? 'Helsinki' : s.kaupunki}</span></li><li>capacity: <span>{s.kapasiteet} bikes</span></li></ul>
    })
  } catch (error) {
    return <p className='message-error'>Sorry we don't have this station yet! <br /> Try again! </p>
  }
  return (
    <div className='station'>
      {stationFound}
    </div>
  )
}

export default StationDetails
