const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000

app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
  console.log(req.body)
  res.json({ status: 'ok' })
})

app.get('/', (req, res) => {
  res.send('Home')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
