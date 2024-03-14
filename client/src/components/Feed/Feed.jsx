import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Feed() {
  const [blogs, setBlogs] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const observer = useRef()
  const lastBlogElementRef = useRef(new Map())

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let blog = entry.target
            blog.classList.add('visible')
            if (lastBlogElementRef.current.get(blogs.length - 1) === blog) {
              setPage((prevPageNumber) => prevPageNumber + 1)
            }
          }
        })
      },
      { threshold: 0.35 }
    )
    return () => observer.current.disconnect()
  }, [blogs])

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/api/blogs?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs((prevBlogs) => [...prevBlogs, ...data])
        setLoading(false)
      })
  }, [page])

  useEffect(() => {
    blogs.forEach((blog, index) => {
      const currentRef = lastBlogElementRef.current.get(index)
      if (currentRef) {
        observer.current.observe(currentRef)
      }
    })
  }, [blogs])

  return (
    <div className='container mt-5 mb-5'>
      {blogs.map((blog, index) => (
        <Link to={'/blog/' + blog.id} style={{ textDecoration: 'none' }}>
          <div
            key={blog.id}
            ref={(el) => lastBlogElementRef.current.set(index, el)}
            className='mb-5 card card-body text-bg-light load-card'
            style={{ marginInlineStart: '15%', marginInlineEnd: '15%' }}
          >
            <p>{blog.author}</p>
            <h3 style={{ fontWeight: '620' }}>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Feed
