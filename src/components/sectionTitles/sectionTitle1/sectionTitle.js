// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// hocs
import withStyles from "src/hocs/withStyles/withStyles"

// import style
import "./sectionTitle.scss"

// use wrapper to style this component
export const sectionTitle = props => {
  const { text, className } = props

  // define container classes here
  const styleClasses = classnames({
    [`${className}`]: className,
    sectionTitleContainer: true,
  })

  return (
    <div className={styleClasses}>
      <h3>{text}</h3>
    </div>
  )
}

/* Prop Definition */
sectionTitle.propTypes = {
  /*
   *
   * the text within the button */
  text: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default withStyles(sectionTitle)
