// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import components
import Image from "src/containers/Image/Image"
import Button from "src/components/buttons/indexButton/indexButton"

// import style
import "./hero.scss"

export const CustomHero = props => {
  const { 
      backgroundImage, 
      logoImage, 
      heading, 
      subHeading, 
      buttonText, 
      link, 
      onClickIndexButton, 
      className } = props

  // define container classes here
  const styleClasses = classnames({
    heroContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
        <div className="hero_backgroundImage">
            <Image {...backgroundImage}/>
        </div>
        <div className={classnames("overlay", "hero_overlay")}/>
        <div className="heroContent">
            <div className="hero_LogoImage">
                <Image {...logoImage}/>
            </div>
            <h4 className="hero_heading">{heading}</h4>
            <div className="hero_subHeading">{subHeading}</div>
            {link && !onClickIndexButton &&
                 <Button text={buttonText} backgroundColor="white" fontColor="dark" className="hero_button" link={link}/>
            }
            {onClickIndexButton && 
                <Button text={buttonText} backgroundColor="white" fontColor="dark" className="hero_button" onClick={onClickIndexButton}/>
            }
        </div>
    </div>
  )
}

/* Prop Definition */
CustomHero.propTypes = {
  /*
   *
   * the background image paths */
  backgroundImage: propTypes.shape({
    path: propTypes.string,
    path_WEBP: propTypes.string,
    path_JPEG2000: propTypes.string,
  }),
  /*
   *
   * the logo image paths */
  logoImage: propTypes.shape({
    path: propTypes.string,
    path_WEBP: propTypes.string,
    path_JPEG2000: propTypes.string,
  }),
  heading: propTypes.string,
  subHeading: propTypes.string,
  /*
   *
   * the text on the button */
  buttonText: propTypes.string,
  /*
   *
   * the link or route which the button leads to */
  link: propTypes.string,
  /*
   *
   * onClick listener callback */
  onClickIndexButton: propTypes.func,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default CustomHero
