import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/InsExplorer.scss'

class InsExplorer extends React.Component {
  state = {
    isWrite: false
  }

  alternate () {
    const input = document.getElementById('menu-input')
    if(input) {
      input.focus()
    }
    this.setState({ isWrite: !this.state.isWrite })
  }
  render() {
    if (!this.state.isWrite) {
      return(
        <div className="explorer explorer--disabled" onClick={() => this.alternate()}>
          <FontAwesomeIcon icon={['fas', 'search']}/>
          <span>Buscar</span>
        </div>
      )
    }
    return(
      <div className="explorer explorer--active">
        <FontAwesomeIcon icon={['fas', 'search']} className="explorer__search"/>
        <input type="text" placeholder="Buscar" id="menu-input"/>
        <FontAwesomeIcon icon={['fas', 'times-circle']} onClick={() => this.alternate()}/>
        <div className="explorer--active__quit" onClick={() => this.alternate()}></div>
      </div>
    )
  }
}

export default InsExplorer
