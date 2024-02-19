import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Write from './components/Write/Write'



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  )
}

export default App
