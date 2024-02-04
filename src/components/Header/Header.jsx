const Header = () => {
  return (
    <header>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL'
        crossOrigin='anonymous'
      ></script>
      <nav className='navbar d-flex justify-content-start mt-1'>
        <a className='navbar-brand ps-4' href='/'>
          <span
            className='bg-dark text-white px-2 py-2 rounded-1'
            style={{ fontFamily: 'Rubik' }}
          >
            BlogBytes
          </span>
        </a>
      </nav>
    </header>
  )
}

export default Header
