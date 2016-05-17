import React from 'react'
import '../styles/style.scss'

const MainContainer = React.createClass({
  render () {
    return (
      // Get started with PureCSS http://purecss.io/start/
      <div className="pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">App Name</a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">One</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Two</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Three</a></li>
        </ul>
      </div>
    )
  },
})

export default MainContainer