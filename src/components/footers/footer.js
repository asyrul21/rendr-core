import React from "react"

// import style
import "./footer.scss"

import config from "./config.json"
const Footer = props => {
  return <div className="footerContainer">{config.text}</div>
}

export default Footer
