import LandingPage from '../LandingPage/LandingPage'
import Feed from '../Feed/Feed'

function Home() {
  let isAuthenticated

  if (localStorage.getItem('token') != null) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }

  return <>{isAuthenticated ? <Feed /> : <LandingPage />}</>
}

export default Home
