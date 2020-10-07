// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"
// import { compose } from "redux"

// import other components component
// hocs
// import withSpacing from "../../hocs/withSpacings/withSpacings"
import withStyles from "src/hocs/withStyles/withStyles"
// dependency component
import something from "src/components/somewhere"

// config - if there is
import config from "./config.json"

// data
import data from "static/data/whichPage/thePage-data.json"

// import style
import "./yourComponentName.scss"

export class yourComponentName extends Component {
  render() {
    const { text, link, className } = this.props

    // define container classes here
    const styleClasses = classnames({
      indexButtonContainer: true,
      [`${className}`]: className,
    })

    return (
      <div className={styleClasses}>
        {/* whatever you need to do here */}
        {/* avoid using style tags */}
      </div>
    )
  }
}

/* Prop Definition */
yourComponentName.propTypes = {
  /*
   *
   * the text within the button */
  text: propTypes.string,
  /*
   *
   * the link or route which the button leads to */
  link: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

// export default withSpacing(yourComponentName)
export default withStyles(yourComponentName)
