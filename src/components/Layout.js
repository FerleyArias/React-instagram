import React from 'react'

import InsHeader from './InsHeader'
import InsFooter from './InsFooter'

function Layout (props) {
  const children = props.children
  const childrenName = children.props.children.props.component.name
  return (
    <React.Fragment>
      <InsHeader/>
      {children}
      <InsFooter/>
    </React.Fragment>
  )
}

export default Layout