import React, { Component } from "react"
import propTypes from "prop-types"
import cx from "classnames"

// import style
import "./hero.scss"

// import component
import Button from "src/components/buttons/indexButton/indexButton"

// config
import config from "./config.json"
// data
import data from "src/data/index/data.json"

class Hero extends Component {
  render() {
    const contentLayoutClass =
      this.props.layout === "singleColumn"
        ? "singleColumnContent"
        : "doubleColumnContent"

    const textLayoutClass =
      this.props.layout === "singleColumn"
        ? "singleColumnHeroTextContainer"
        : "doubleColumnHeroTextContainer"

    return (
      <div className="heroContainer">
        <div
          className="backgroundImage"
          style={{
            backgroundImage: `url(${config.backgroundImagePath})`,
          }}
        />

        {config.overlay && (
          <div
            className="overlay"
            style={{
              background: `${config.overlay.overlayColor}`,
            }}
          />
        )}

        {config.hasContent && (
          <div className={cx("heroContent", contentLayoutClass)}>
            {config.sideImagePath && this.props.layout === "doubleColumn" && (
              <div
                className="heroSideImage"
                style={{
                  backgroundImage: `url(${config.sideImagePath})`,
                }}
              />
            )}
            {data && (
              <div className={cx("heroTextContainer", textLayoutClass)}>
                {data.heading && (
                  <h1
                    className="heroHeading"
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                )}

                {data.subHeading && (
                  <p className="heroSubHeading">{data.subHeading}</p>
                )}

                {config.button && (
                  <Button
                    {...config.button}
                    text={data.button}
                    backgroundColor={config.button.color}
                    fontColor={config.button.linkColor}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

Hero.propTypes = {
  layout: propTypes.oneOf(["singleColumn", "doubleColumn"]),
}

export default Hero
