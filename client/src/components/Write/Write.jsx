import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Strikethrough from '@sotaproject/strikethrough'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import ImageTool from '@editorjs/image'

function Write() {
  const navigate = useNavigate()

  const editor = new EditorJS({
    holder: 'editorjs',
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
    data: {
      blocks: [
        {
          type: 'header',
          data: {
            level: 1,
          },
        },
        {
          type: 'paragraph',
        },
      ],
    },
  })

  async function publish() {
    const editorData = await editor.save()

    const response = await fetch('http://localhost:3000/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(editorData),
    })

    const data = await response.json()

    if (data.status == 'ok') {
      navigate('/')
    } else {
      alert(data.error)
    }
  }

  return (
    <>
      <div id='editorjs'></div>
      <button
        className='btn btn-outline-secondary hover'
        style={{ marginLeft: '70%' }}
        onClick={publish}
      >
        publish
      </button>
    </>
  )
}

export default Write
