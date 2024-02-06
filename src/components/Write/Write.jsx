import { useEffect } from 'react'

import Strikethrough from '@sotaproject/strikethrough'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import ImageTool from '@editorjs/image'

function Write() {
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
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
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

  /* The code is part of the "Log article" button */
  // useEffect(() => {
  //   const handleLogData = async () => {
  //     const savedData = await editor.save()
  //     console.log(savedData)
  //   }

  //   const logButton = document.querySelector('button')
  //   logButton.addEventListener('click', handleLogData)

  //   return () => {
  //     logButton.removeEventListener('click', handleLogData)
  //   }
  // }, [])

  return (
    <>
      {/* <button>Log article</button> */}
      <div id='editorjs'></div>
    </>
  )
}

export default Write
