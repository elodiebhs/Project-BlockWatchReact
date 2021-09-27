import React from 'react';
import NavBar from './NavBar'

import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">LOGO</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <NavBar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          99999999999
        </section>
        <section className="header-bottom__email">
          shop.info@gmail.com
        </section>
      </section>
    </section>
  )
}

export default Header;