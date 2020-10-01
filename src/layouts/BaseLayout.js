import React, { Fragment } from "react"
import Header from "../components/headers/navbar"
import Footer from "../components/footers/Footer"

const BaseLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default BaseLayout
