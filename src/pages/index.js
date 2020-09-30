import React, { Fragment } from "react"
import Layout from "../layouts/BaseLayout"
import { Link } from "gatsby"

// import style module
import style from "../styles/pages/index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={style.header}>Hello World!</h1>
      <p>Welcome to Rendr Core!</p>
      <p className={style.brownText}>This text should be brown.</p>
    </Layout>
  )
}

export default IndexPage
