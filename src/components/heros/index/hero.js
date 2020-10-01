import React, { Component } from "react"
import propTypes from "prop-types"
import cx from "classNames"

// import style
import "./hero.scss"

// import component
import Button from "../../buttons/indexButton"

// config
import config from "./config.json"

class Hero extends Component {
  render() {
    const contentLayoutClass =
      config.layout === "singleColumn"
        ? "singleColumnContent"
        : "doubleColumnContent"

    const textLayoutClass =
      config.layout === "singleColumn"
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
            {config.sideImagePath && config.layout === "doubleColumn" && (
              <div
                className="heroSideImage"
                style={{
                  backgroundImage: `url(${config.sideImagePath})`,
                }}
              />
            )}
            {config.texts && (
              <div className={cx("heroTextContainer", textLayoutClass)}>
                {config.texts.heading && (
                  <h1
                    className="heroHeading"
                    dangerouslySetInnerHTML={{ __html: config.texts.heading }}
                  />
                )}

                {config.texts.subHeading && (
                  <p className="heroSubHeading">{config.texts.subHeading}</p>
                )}

                {config.button && <Button {...config.button} />}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

// Hero.propTypes = {
//   layout: propTypes.oneOf(["singleColumn", "doubleColumn"]),
// }

export default Hero
