// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// component
import Image from "src/containers/Image/Image"

// import style
import "./imageSlider.scss"

class ImageSlider extends Component {
  constructor() {
    super()
    this.state = {
      containerWidth: 0,
      translateValue: 0,
      currentImage: 0,
    }

    const calculatedMargin = 0
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateContainerWidth)
  }

  updateContainerWidth = () => {
    const containerWidth = this.divElement.clientWidth
    this.setState({
      containerWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateContainerWidth)
  }

  handleClickForward = event => {
    if (event) {
      const newTranslateValue =
        this.state.translateValue -
        this.props.imageWidth -
        this.calculatedMargin * 2

      if (this.state.currentImage < this.props.images.length - 1) {
        const nextImage = this.state.currentImage + 1
        return this.setState({
          translateValue: newTranslateValue,
          currentImage: nextImage,
        })
      }
    }
  }

  handleClickPrevious = event => {
    if (event) {
      const newTranslateValue =
        this.state.translateValue +
        this.props.imageWidth +
        this.calculatedMargin * 2

      if (this.state.currentImage !== 0) {
        const nextImage = this.state.currentImage - 1
        return this.setState({
          translateValue: newTranslateValue,
          currentImage: nextImage,
        })
      }
    }
  }

  render() {
    const { images, imageWidth, className } = this.props

    // define container classes here
    const styleClasses = classnames({
      imageSliderContainer: true,
      [`${className}`]: className,
    })

    // define translate value
    const translateStyle = {
      transform: `translateX(${this.state.translateValue}px)`,
    }

    // this calculates how much margin we need to keep the images center
    this.calculatedMargin = (this.state.containerWidth - imageWidth) / 2

    console.log("Container width:", this.state.containerWidth)
    return (
      <div
        className={styleClasses}
        ref={divElement => {
          this.divElement = divElement
        }}
      >
        <div
          className={classnames(
            "imageSlider_navButton",
            "imageSlider_previousButton"
          )}
          onClick={this.handleClickPrevious}
        ></div>
        <div className="imageSlider_imagesContainer" style={translateStyle}>
          {images.map((image, idx) => {
            return (
              <div
                key={idx}
                className="imageSlider_imageItem"
                style={{
                  width: `${imageWidth}px`,
                  margin: `0 ${this.calculatedMargin}px`,
                }}
              >
                <Image {...image} />
              </div>
            )
          })}
        </div>
        <div
          className={classnames(
            "imageSlider_navButton",
            "imageSlider_forwardButton"
          )}
          onClick={this.handleClickForward}
        />
      </div>
    )
  }
}

/* Prop Definition */
ImageSlider.propTypes = {
  /*
   *
   * images to render as a slider */
  images: propTypes.arrayOf(
    propTypes.shape({
      path: propTypes.string,
      path_WEBP: propTypes.string,
      path_JPEG2000: propTypes.string,
    })
  ),
  /*
   *
   * width of individual image. Important for translation purposes */
  imageWidth: propTypes.number.isRequired,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default ImageSlider

// https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
