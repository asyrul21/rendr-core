import React from "react"
import propTypes from "prop-types"
import BaseLayout from "../BaseLayout"

const ContentLayout = props => {
  const paddingTop = props.paddingTop ? `${props.paddingTop}px` : "0"

  const style = {
    paddingTop,
  }

  return (
    <BaseLayout>
      <div style={style}>{props.children}</div>
    </BaseLayout>
  )
}

ContentLayout.propTypes = {
  paddingTop: propTypes.number,
}

export default ContentLayout
