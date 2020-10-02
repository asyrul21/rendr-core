import React, { Component } from "react"
import { Link } from "gatsby"
import { compose } from "redux"
import propTypes from "prop-types"
import withSpacing from "../../hocs/withSpacings/withSpacings"
import withStyles from "../../hocs/withStyles/withStyles"
import classnames from "classnames"

import "./indexButton.scss"

export class indexButton extends Component {
  render() {
    const { text, link } = this.props
    console.log("Text:", text)

    const styleClasses = classnames({
      [`${this.props.className}`]: this.props.className,
      indexButtonContainer: true,
    })

    const style = this.props.style ? this.props.style : {}

    return (
      <div className={styleClasses} style={style}>
        <Link to={link} className="buttonText">
          {text}
        </Link>
      </div>
    )
  }
}

indexButton.propTypes = {
  text: propTypes.string,
  link: propTypes.string,
  className: propTypes.string,
}

// export default indexButton
// export default withSpacing(indexButton)
// export default withStyles(indexButton)
export default compose(withStyles, withSpacing)(indexButton)
