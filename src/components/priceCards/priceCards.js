// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import PriceCard from "./priceCard/priceCard"


// import style
import "./priceCards.scss"

export const PriceCards = props => {
  const { data, className } = props

  // define container classes here
  const styleClasses = classnames({
    priceCardsContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      {data.map((pricing, idx)=> {
          return (
            <PriceCard key={idx} {...pricing}/>
          )
      })}
    </div>
  )
}

/* Prop Definition */
PriceCards.propTypes = {
  /*
   *
   * the array of pricing information */
  data: propTypes.arrayOf(propTypes.shape({
      heading: propTypes.string,
      subHeading: propTypes.string,
      text: propTypes.string,
      price: propTypes.string,
      buttonText: propTypes.string
  })),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default PriceCards
