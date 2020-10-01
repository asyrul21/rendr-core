import React, { Component } from "react"

// import components
import NavItems from "./navItems/navItems"

// import style
import "./navbar.scss"

// component config
import config from "./config.json"
class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="logo"></div>

        {/* need to check width */}
        {/* if too narrow, use Hamburger */}
        <NavItems items={config.navLinks} />
      </div>
    )
  }
}

export default Navbar
