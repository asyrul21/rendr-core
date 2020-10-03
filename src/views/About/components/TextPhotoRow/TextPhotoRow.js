import React, { Component, Fragment } from "react"
import TextBlock from "../../../../components/textBlock/textBlock"
import ImageContainer from "../../../../containers/ImageContainer/ImageContainer"
import propTypes from "prop-types"

import "./TextPhotoRow.scss"

class TextPhotoRow extends Component {
  renderTextBlock = props => {
    const { heading, paragraphs } = props
    return (
      <TextBlock
        heading="Who are we?"
        paragraphs={[
          "The Fun Factory strives towards this by first, engaging tutors who love children and possess the passion to develop them into happy and smart individuals.",
          "This, coupled with a syllabus designed specially to bring out the best in your child are the elements that make The Fun Factory the best choice for your child.",
        ]}
      ></TextBlock>
    )
  }

  render() {
    const { pictureFirst, pictureLast, heading, paragraphs } = this.props

    return (
      <div className="textPhotoRow_container">
        {pictureLast && (
          <Fragment>
            <div className="textPhotoRow_textBlock">
              {this.renderTextBlock({ heading, paragraphs })}
            </div>
            <div className="textPhotoRow_photoContainer">
              <ImageContainer path="/static/images/about/about1.png"></ImageContainer>
            </div>
          </Fragment>
        )}
        {pictureFirst && (
          <Fragment>
            <div className="textPhotoRow_photoContainer">
              <ImageContainer path="/static/images/about/about1.png"></ImageContainer>
            </div>
            <div className="textPhotoRow_textBlock">
              {this.renderTextBlock({ heading, paragraphs })}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}

TextPhotoRow.propTypes = {
  pictureFirst: propTypes.bool,
  pictureLast: propTypes.bool,
  heading: propTypes.string,
  paragraphs: propTypes.arrayOf(propTypes.string),
}

export default TextPhotoRow
