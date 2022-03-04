import React from 'react'
import Article_content from './Article_content'
import Article_header from './Article_header'
import Gallery from './Gallery'

const Article = () => {
  return (
    <div>
      <Article_header/>
      <Article_content/>
      <Gallery/>
    </div>
  )
}

export default Article