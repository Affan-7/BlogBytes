import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import EditorJS from '@editorjs/editorjs'

import Strikethrough from '@sotaproject/strikethrough'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import ImageTool from '@editorjs/image'

function Blog() {
  const { id } = useParams()
  const [blog, setBlog] = useState()
  const editorContainer = useRef(null)

  async function getBlog() {
    const response = await fetch(`http://localhost:3000/api/blog/${id}`)
    const data = await response.json()
    setBlog(data)
  }

  useEffect(() => {
    getBlog()
  }, [])

  useEffect(() => {
    if (blog) {
      const editor = new EditorJS({
        holder: editorContainer.current,
        data: blog,
        readOnly: true,
        tools: {
          list: List,
          strikethrough: Strikethrough,
          header: {
            class: Header,
            inlineToolbar: false,
            config: {
              placeholder: 'Enter a heading',
              levels: [1, 2, 3, 4, 5],
              defaultLevel: 2,
            },
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
              placeholder: 'Enter a heading',
            },
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:3000/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:3000/fetchUrl', // Your endpoint that provides uploading by Url
              },
            },
          },
        },
      })
    }
  }, [blog])

  return <div ref={editorContainer}></div>
}

export default Blog
