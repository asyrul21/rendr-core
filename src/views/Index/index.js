import React, { Fragment } from "react"

// import component
import Hero from "../../components/heros/index/hero"

// import style
import "./index.scss"

const Index = () => {
  return (
    <Fragment>
      {/* <h1 className="header">Hello World!</h1>
      <p>Welcome to Rendr Core!</p>
      <p className="brownText">This text should be brown.</p> */}
      <Hero />
    </Fragment>
  )
}

export default Index
