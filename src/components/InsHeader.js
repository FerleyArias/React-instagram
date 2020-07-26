import React from 'react'

import './styles/InsHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InsExplorer from './InsExplorer'

function InsHeader () {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
        </div>
        <InsExplorer/>
        <nav className="menuIcons">
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
