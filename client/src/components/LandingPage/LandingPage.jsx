import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <p style={{ fontSize: '70px', textAlign: 'center' }}>
          Discover, connect,
          <br />
          share
        </p>
        <Link to='/register' style={{ width: '15%' }} className='mt-5'>
          <button
            className='btn btn-outline-secondary hover'
            style={{ width: '100%' }}
          >
            Get started
          </button>
        </Link>
      </div>
    </>
  )
}

export default LandingPage
