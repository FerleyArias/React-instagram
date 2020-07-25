import React from 'react'

import './styles/InsHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InsHeader () {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="" alt=""/>
        </div>
        <div className="header__explorer--disabled">
          <span></span>
          <span></span>
        </div>
        <nav className="menu-">
          <a href="">
            <FontAwesomeIcon icon={['fas', 'home']}/>
          </a>
          <a href="">
            <FontAwesomeIcon icon={['far', 'paper-plane']}/>
          </a>
          <a href="">
            <FontAwesomeIcon icon={['far', 'compass']}/>
          </a>
          <div>
            <FontAwesomeIcon icon={['far', 'heart']}/>
          </div>
          <div className="circular">
            <img src="" alt=""/>
          </div>
        </nav>
      </div>
    </header>
  )  
}

export default InsHeader
