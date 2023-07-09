import { Route, Routes } from 'react-router'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Continent } from './Components/Continent'
import { Country } from './Components/Country'
import { City } from './Components/IndividualCity'
import { Destination } from './Components/Destination'

function App() {


  return (
    <>
      <h1>Welcome to Trip Advisor</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Continent/>} />
          <Route path="/countries/:continent" element={<Country/>} />
          <Route path="/cities/:country" element={<City/>} />
          <Route path="/destination/:city" element={<Destination/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
