import React, { Component } from "react"
import { Link } from "gatsby"
// import { compose } from "redux"
import propTypes from "prop-types"
// import withSpacing from "../../hocs/withSpacings/withSpacings"
import withStyles from "src/hocs/withStyles/withStyles"
import classnames from "classnames"

import "./indexButton.scss"

export class indexButton extends Component {
  render() {
    const { text, link, external, className } = this.props

    const styleClasses = classnames({
      indexButtonContainer: true,
      [`${className}`]: className,
    })

    if(external){
      return (
        <div className={styleClasses}>
          <a href={link} className="buttonText">
            { text }
          </a>
        </div>
      )
    }
    else {
      return (
        <div className={styleClasses}>
          <Link to={link} className="buttonText">
            {text}
          </Link>
        </div>
      )
    }
  }
}

indexButton.propTypes = {
  /*
   *
   * the text within the button */
  text: propTypes.string,
  /*
   *
   * the if the button link leads to external URLS */
  external: propTypes.bool,
  /*
   *
   * the link or route which the button leads to */
  link: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default withStyles(indexButton)
