export async function auth() {
  const response = await fetch('http://localhost:3000/api/auth', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })

  const data = await response.json()

  return data.status === 'ok'
}

export default auth
