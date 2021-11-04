import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="http://twitter.com/caseyfostertv" target="_blank" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Hello, I am Casey Foster!</strong>
        <br /> Entrepreneur, VP of Product and
        <br /> a 15 year esports verteran.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
