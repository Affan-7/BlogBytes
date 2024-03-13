import { useState, useEffect } from 'react'
import TokenContext from './TokenContext'

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState()

  useEffect(() => {
    const valueOfToken = localStorage.getItem('token')
    setToken(valueOfToken)
  }, [])

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenProvider
