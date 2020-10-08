import React from "react"
import classnames from "classnames"

import "./Content.scss"

const Content = props => {
  const styleClasses = classnames({
    [`${props.className}`]: props.className,
    contentContainer: true,
  })

  return <div className={styleClasses}>{props.children}</div>
}

export default Content
