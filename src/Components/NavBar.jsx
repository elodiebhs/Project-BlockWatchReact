import React from 'react';

import './NavBar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/portfolio" className="navbar-item">Report an Incident</a>
      <a href="/shop" className="navbar-item">See all Incident</a>
      <a href="/blog" className="navbar-item">To do</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default Navbar;