import React, { Fragment } from "react"
import Header from "../components/headers/navbar1/navbar"
// import Footer from "../shared/Footer"

//functional component, instead of class
//because simpler

const BaseLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  )
}

export default BaseLayout
