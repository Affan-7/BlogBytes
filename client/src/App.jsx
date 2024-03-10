import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Write from './components/Write/Write'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/write' element={<Write />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
