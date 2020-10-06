import React from "react"
// import Layout from "../layouts/BaseLayout"
import ContentLayout from "../layouts/ContentLayout/ContentLayout"

// import view
import Landing from "../views/Landing/landing"

// SEO
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <ContentLayout paddingTop={45}>
      <SEO title="Index Page" />
      <Landing />
    </ContentLayout>
  )
}

export default IndexPage
