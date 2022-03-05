import React from 'react'
import Article_content from './Article_content'
import Article_header from './Article_header'
import Gallery from './Gallery'
import Other from './Other'
import About from '../components/About'
import Footer from '../components/Footer'
import Comment from './Comment'
import Newsletter from './Newsletter'

const Article = () => {
  return (
    <div>
      <Article_header/>
      <Article_content/>
      <Gallery/>
      <Other/>
      <Comment/>
      <Newsletter/>
      <About />
      <Footer />
    </div>
  )
}

export default Article