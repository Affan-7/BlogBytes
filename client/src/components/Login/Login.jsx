import { useContext, useState } from 'react'
import TokenContext from '../../contexts/TokenContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { token, setToken } = useContext(TokenContext)

  async function loginUser(event) {
    event.preventDefault()
    setIsLoading(true)
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (data.user) {
      localStorage.setItem('token', data.user)
      setToken(data.user)
      navigate('/')
    } else {
      setError(data.error)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <form
            className='col-fluid col-sm-9 col-md-7 col-lg-6 col-xl-5 m-auto border rounded-4 p-5 d-felx'
            onSubmit={loginUser}
          >
            <div className='text-center'>
              <h1 className='p-2'>BlogBytes</h1>
            </div>
            <h4 className='text-center mb-4'>Login</h4>
            <div className='form-floating mb-4'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
                id='floatingEmail'
                placeholder='name@example.com'
              />
              <label htmlFor='floatingEmail'>Email</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            {error && <div className='alert alert-danger'>{error}</div>}
            <button
              type='submit'
              className='btn btn-outline-secondary hover'
              disabled={isLoading}
            >
              Login
            </button>
            <a style={{ float: 'right' }} href='/register'>
              Don't have an account yet?
            </a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
