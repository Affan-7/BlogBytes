import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Link to='/write'>write</Link>
      <br />
      <Link to='/landing'>Landing</Link>
    </>
  )
}

export default Home
