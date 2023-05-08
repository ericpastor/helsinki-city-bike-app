import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AddTrip from './components/AddTrip'
import Stations from './components/Stations'
import TripList from './components/TripList'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trips' element={<TripList />} />
        <Route path='/stations' element={<Stations />} />
        <Route path='/addTrip' element={<AddTrip />} />
      </Routes>
    </div>
  )
}

export default App
