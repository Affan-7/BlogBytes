const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const Blog = require('./models/blogModel')
const jwt = require('jsonwebtoken')

const port = 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/blogbytes')

function validateToken(token) {
  try {
    jwt.verify(token, 'testing secret')
    return true
  } catch (err) {
    return false
  }
}

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
  validateToken(token)
    ? res.json({ status: 'ok' })
    : res.json({ status: 'error', error: 'Invalid token' })
})

app.post('/api/publish', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]

  const tokenIsValid = validateToken(token)

  if (tokenIsValid) {
    const user = jwt.decode(token)

    const blog = await Blog.create({
      email: user.email,
      blog: req.body,
    })

    res.json({ status: 'ok' })
  } else {
    res.json({ status: 'error', error: 'Invalid token' })
  }

  console.dir(req.body, { depth: null })
})

app.get('/api/blogs', async (req, res) => {
  const page = Number(req.query.page) || 1
  const limit = 10
  const skip = (page - 1) * limit

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)

  const modifiedBlogs = await Promise.all(
    blogs.map(async (blog) => {
      const { blocks } = blog.blog
      const title =
        blocks.find((block) => block.type === 'header')?.data.text || ''
      const body =
        blocks
          .find((block) => block.type === 'paragraph')
          ?.data.text.split(' ')
          .slice(0, 30)
          .join(' ') + '...' || ''

      const user = await User.findOne({ email: blog.email })
      const author = user ? `${user.firstName} ${user.lastName}` : ''
      const id = blog._id

      return { title, body, author, id }
    })
  )

  res.json(modifiedBlogs)
})

app.get('/api/blog/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  res.json(blog.blog)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
