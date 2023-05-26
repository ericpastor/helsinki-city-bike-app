const StationDetails = ({ station }) => {
  let stationFound = []
  try {
    stationFound = Object.values(station).map((s) => {
      return <ul key={s.id}><li>{s.name}</li> <li>{s.osoite}</li></ul>
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
