const StationDetails = ({ station }) => {
  if (station === null) { return null }
  return (
    <div style={{ marginTop: '50px' }}>
      {station && (
        <div>
          {Object.values(station).map((s) => {
            return <ul key={s.id}><li>{s.name}</li> <li>{s.osoite}</li></ul>
          })}
        </div>)}
    </div>
  )
}

export default StationDetails
