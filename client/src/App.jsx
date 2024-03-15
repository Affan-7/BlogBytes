import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Write from './components/Write/Write'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LandingPage from './components/LandingPage/LandingPage'
import TokenProvider from './contexts/TokenProvider'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <Router>
      <TokenProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/write' element={<Write />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
      </TokenProvider>
    </Router>
  )
}

export default App
