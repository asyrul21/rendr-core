import React, { Component, Fragment } from "react"
import classnames from "classnames"

import "./ImageContainer.scss"

// use classname to have shared image properties
class ImageContainer extends Component {
  renderImage(useFallback) {
    const styleClasses = classnames({
      [`${this.props.className}`]: this.props.className,
      imageContainer: true,
    })

    return useFallback ? (
      <div
        className={styleClasses}
        style={{ backgroundImage: `url(${this.props.path_JPEG2000})` }}
      >
        <div
          className={styleClasses}
          style={{ backgroundImage: `url(${this.props.path_WEBP})` }}
        ></div>
      </div>
    ) : (
      <div
        className={styleClasses}
        style={{ backgroundImage: `url(${this.props.path})` }}
      ></div>
    )
  }

  render() {
    const { path_JPEG2000, path_WEBP } = this.props
    const useFallbackStrategy = path_JPEG2000 && path_WEBP ? true : false

    return <Fragment>{this.renderImage(useFallbackStrategy)}</Fragment>
  }
}

export default ImageContainer
