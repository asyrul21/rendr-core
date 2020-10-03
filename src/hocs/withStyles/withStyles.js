import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

import "./withStyles.scss"

const withStyles = ComposedComponent => {
  class GenericStylesWrapper extends Component {
    render() {
      const {
        fontColor,
        fontWeight,
        fontStyle,
        fontSize,
        lineHeight,
        backgroundColor,
        borderRadius,
        className,
        ...rest
      } = this.props

      const styleClasses = classnames({
        [`${className}`]: className,
        [`fontColor-${fontColor}`]: fontColor,
        [`fontWeight-${fontWeight}`]: fontWeight,
        [`fontStyle-${fontStyle}`]: fontStyle,
        [`backgroundColor-${backgroundColor}`]: backgroundColor,
      })

      const style = {
        ...this.props.style,
        borderRadius: borderRadius ? `${borderRadius}px` : 0,
        fontSize: fontSize ? `${fontSize}px` : "inherit",
        lineHeight: lineHeight ? `${lineHeight}px` : "inherit",
      }

      return (
        <ComposedComponent {...rest} style={style} className={styleClasses} />
      )
    }
  }

  GenericStylesWrapper.propTypes = withStyles.propTypes

  return GenericStylesWrapper
}

withStyles.propTypes = {
  ComposedComponent: propTypes.object,
  fontColor: propTypes.oneOf([
    "dark",
    "grey",
    "mid-grey",
    "light-grey",
    "white",
    "inherit",
    "primary",
    "link-blue",
    "navy-blue",
    "red",
    "orange",
    "green",
    "yellow",
    "purple",
  ]),

  fontWeight: propTypes.oneOf([
    "light",
    "regular",
    "medium",
    "semiBold",
    "bold",
  ]),

  fontStyle: propTypes.oneOf(["normal", "italic"]),
  fontSize: propTypes.number,
  lineHeight: propTypes.number,

  backgroundColor: propTypes.oneOf([
    "dark",
    "grey",
    "mid-grey",
    "light-grey",
    "white",
    "inherit",
    "primary",
    "link-blue",
    "navy-blue",
    "red",
    "orange",
    "green",
    "yellow",
    "purple",
  ]),
  borderRadius: propTypes.number,
  opacity: propTypes.number,

  // className
  className: propTypes.string,
}

export default withStyles
