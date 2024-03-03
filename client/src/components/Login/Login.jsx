import React from 'react'

function Login() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <form className='col-fluid col-sm-9 col-md-7 col-lg-6 col-xl-5 m-auto border rounded-4 p-5 d-felx'>
            <div className='text-center'>
              <h1 className='p-2'>BlogBytes</h1>
            </div>
            <h4 className='text-center mb-4'>Login</h4>
            <div className='form-floating mb-4'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <button type='submit' className='btn btn-outline-secondary hover'>
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
