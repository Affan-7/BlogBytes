import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  const [error, setError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  async function registerUser(event) {
    event.preventDefault()
    setIsLoading(true)
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })

    const data = await response.json()

    if (data.user) {
      localStorage.setItem('token', data.user)
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
            onSubmit={registerUser}
          >
            <div className='text-center'>
              <h1 className='p-2'>BlogBytes</h1>
            </div>
            <h4 className='text-center mb-4'>Register</h4>
            <div className='form-floating mb-4'>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
                id='floatingFirstName'
                placeholder='First Name'
              />
              <label htmlFor='floatingFirstName'>First Name</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
                id='floatingLastName'
                placeholder='Last Name'
              />
              <label htmlFor='floatingLastName'>Last Name</label>
            </div>
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
              Create Account
            </button>
            <a style={{ float: 'right' }} href='/login'>
              Already have an account?
            </a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
