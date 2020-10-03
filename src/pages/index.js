import React from "react"
// import Layout from "../layouts/BaseLayout"
import ContentLayout from "../layouts/ContentLayout/ContentLayout"

// import view
import Index from "../views/Index/index"

// SEO
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <ContentLayout paddingTop={45}>
      <SEO title="Index Page" />
      <Index />
    </ContentLayout>
  )
}

export default IndexPage
