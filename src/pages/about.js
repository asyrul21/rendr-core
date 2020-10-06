import React from "react"
import ContentLayout from "../layouts/ContentLayout/ContentLayout"

// import view
import About from "../views/About/about"

import SEO from "../components/seo"

const AboutPage = () => (
  <ContentLayout paddingTop={100}>
    <SEO title="About Page" />
    <About />
  </ContentLayout>
)

export default AboutPage
