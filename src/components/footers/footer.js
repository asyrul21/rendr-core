import React from "react"

// import style
import "./footer.scss"

import config from "./config.json"
const Footer = props => {
  return <div className="footerContainer"
  dangerouslySetInnerHTML={{ __html: config.text }}/>
}

export default Footer
