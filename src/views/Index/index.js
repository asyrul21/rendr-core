import React, { Fragment } from "react"

// import component
import Hero from "../../components/heros/index/hero"

// import style
import "./index.scss"

const Index = () => {
  return (
    <Fragment>
      <Hero layout="doubleColumn" />
    </Fragment>
  )
}

export default Index
