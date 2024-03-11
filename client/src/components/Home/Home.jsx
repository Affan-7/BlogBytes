import { useState, useEffect } from 'react'

import LandingPage from '../LandingPage/LandingPage'
import Feed from '../Feed/Feed'

import { auth } from '../../utils/auth'

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState()

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      auth().then((result) => {
        setIsAuthenticated(result)
      })
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  if (isAuthenticated === true) {
    return <Feed />
  } else if (isAuthenticated === false) {
    return <LandingPage />
  } else {
    return <></>
  }
}

export default Home
