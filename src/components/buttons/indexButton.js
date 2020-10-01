import React, { Component } from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"

import "./indexButton.scss"

class indexButton extends Component {
  getColor = color => {
    if (color === "orange") {
      return "#FB861B"
    }
  }

  render() {
    const { color, shape, text, link, linkColor } = this.props

    const borderRadius = shape === "oval" ? "30px" : "none"
    const backgroundColor = this.getColor(color)

    const style = {
      backgroundColor,
      borderRadius,
    }

    return (
      <div className="indexButtonContainer" style={style}>
        <Link href={link} style={{ color: linkColor }}>
          {text}
        </Link>
      </div>
    )
  }
}

// put color, shape, link and linkColor in HOC
indexButton.propTypes = {
  color: propTypes.oneOf(["orange", "white", "black", "blue"]),
  shape: propTypes.oneOf(["oval", "rectangle"]),
  text: propTypes.string,
  link: propTypes.string,
  linkColor: propTypes.oneOf(["white", "black"]),
}

export default indexButton
