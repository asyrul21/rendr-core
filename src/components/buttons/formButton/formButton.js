import React, { Component } from "react"
import propTypes from "prop-types"
// import withSpacing from "../../hocs/withSpacings/withSpacings"
import withStyles from "src/hocs/withStyles/withStyles"
import classnames from "classnames"

import "./FormButton.scss"

export class FormButton extends Component {
  render() {
    const { value, className } = this.props

    const styleClasses = classnames({
      formButtonContainer: true,
      [`${className}`]: className,
    })

    return <input type="submit" value={value} className={styleClasses} />
  }
}

FormButton.propTypes = {
  /*
   *
   * the text within the button */
  value: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default withStyles(FormButton)
