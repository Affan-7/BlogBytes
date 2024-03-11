const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const jwt = require('jsonwebtoken')

const port = 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/blogbytes')

app.post('/api/register', async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })

    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      'testing secret'
    )
    res.json({ status: 'ok', user: token })
  } catch (err) {
    console.log(err)
    res.json({
      status: 'error',
      error: 'An account with this email already exists',
    })
  }
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  })

  compare = await user
    .comparePassword(req.body.password, user.password)
    .then((result) => {
      return result
    })

  if (user && compare) {
    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      'testing secret'
    )
    res.json({ status: 'ok', user: token })
  } else {
    res.json({ status: 'error', error: 'Invalid email or password!' })
  }
})

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/api/auth', (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  try {
    jwt.verify(token, 'testing secret')
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Invalid token' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
