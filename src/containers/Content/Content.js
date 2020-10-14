import React from "react"
import classnames from "classnames"
import propTypes from "prop-types"

import "./Content.scss"

const Content = React.forwardRef((props, ref) => {
  const { className, children } = props; 
  const styleClasses = classnames({
    [`${className}`]: className,
    contentContainer: true,
  })

  return <div ref={ref} className={styleClasses}>{children}</div>

})

/* Prop Definition */
Content.propTypes = {
  /*
   *
   * any applied classnames */
  className: propTypes.string,
  /*
   *
   * children of component */
  children: propTypes.node.isRequired,
}

export default Content
