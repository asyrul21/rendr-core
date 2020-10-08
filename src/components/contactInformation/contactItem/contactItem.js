// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// component
import Image from "src/containers/Image/Image"

// import style
import "./contactItem.scss"

export const ContactItem = props => {
  const { item, className } = props

  // define container classes here
  const styleClasses = classnames({
    contactItemContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      {/* whatever you need to do here */}
      {/* avoid using style tags */}
      <div className="contactItem_IconContainer">
        <Image {...item.iconPath} />
      </div>
      <div className="contactItem_linesContainer">
        {item.lines.map((text, idx) => {
          return (
            <p key={idx} className="contactItem_text">
              {text}
            </p>
          )
        })}
      </div>
    </div>
  )
}

/* Prop Definition */
ContactItem.propTypes = {
  /*
   *
   * the contact information item */
  item: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      iconPath: propTypes.shape({
        path: propTypes.string,
        path_WEBP: propTypes.string,
        path_JPEG2000: propTypes.string,
      }),
      lines: propTypes.arrayOf(propTypes.string),
    })
  ),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default ContactItem
