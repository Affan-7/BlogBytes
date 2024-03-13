import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'
import auth from '../../utils/auth'
import { useEffect, useState, useContext } from 'react'
import TokenContext from '../../contexts/TokenContext'

function Header() {
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState()
  const token = useContext(TokenContext)

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      auth().then((result) => {
        setIsAuthenticated(result)
      })
    } else {
      setIsAuthenticated(false)
    }
  }, [token])

  return (
    <header>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL'
        crossOrigin='anonymous'
      ></script>
      <nav
        className='navbar d-flex justify-content-start align-items-center'
        style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <div className='container justify-content-start'>
          <Link to='/'>
            <img src={logo} alt='My SVG' className='logo' />
          </Link>
          <div className='box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              className='search-icon'
              fill='black'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
            </svg>
            <input type='text' placeholder='Search...' />
          </div>
          {isAuthenticated ? (
            <>
              {(location.pathname === '/' && (
                <>
                  <Link to='/write' className='ms-auto me-4'>
                    <button className='btn btn-outline-secondary hover'>
                      Write
                    </button>
                  </Link>
                  <Link to='/profile' className='me-4'>
                    <img src={profile} className='profile' />
                  </Link>
                </>
              )) ||
                (location.pathname === '/write' && (
                  <>
                    <Link to='/profile' className='ms-auto me-4'>
                      <img src={profile} className='profile' />
                    </Link>
                  </>
                )) || (
                  <Link to='/profile' className='ms-auto'>
                    <img src={profile} className='profile' />
                  </Link>
                )}
            </>
          ) : (
            <>
              <Link to='/login' className='ms-auto me-4'>
                <button className='btn btn-outline-secondary hover'>
                  Login
                </button>
              </Link>
              <Link to='/register'>
                <button className='btn btn-outline-secondary hover'>
                  Create Account
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
