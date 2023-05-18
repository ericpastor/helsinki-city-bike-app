import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AddTrip from './components/AddTrip'
import FilteredTripList from './components/FilteredTripList'
import StationList from './components/StationList'
import SearchStations from './components/SearchStations'
import CssBaseline from '@mui/material/CssBaseline'
import TripList from './components/TripList'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trips' element={<TripList />} />
        <Route path='/searchTrip' element={<FilteredTripList />} />
        <Route path='/stations' element={<StationList />} />
        <Route path='/addTrip' element={<AddTrip />} />
        <Route path='/stationDetails' element={<SearchStations />} />
      </Routes>
    </div>
  )
}

export default App
