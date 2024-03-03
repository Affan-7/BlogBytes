import React from 'react'

function Register() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <form className='col-fluid col-sm-9 col-md-7 col-lg-6 col-xl-5 m-auto border rounded-4 p-5 d-felx'>
            <div className='text-center'>
              <h1 className='p-2'>BlogBytes</h1>
            </div>
            <h4 className='text-center mb-4'>Register</h4>
            <div className='form-floating mb-4'>
              <input
                type='text'
                className='form-control'
                id='floatingFirstName'
                placeholder='First Name'
              />
              <label htmlFor='floatingFirstName'>First Name</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                type='text'
                className='form-control'
                id='floatingLastName'
                placeholder='Last Name'
              />
              <label htmlFor='floatingLastName'>Last Name</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                type='email'
                className='form-control'
                id='floatingEmail'
                placeholder='name@example.com'
              />
              <label htmlFor='floatingEmail'>Email address</label>
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
