import React from "react"
import ContentLayout from "../layouts/ContentLayout/ContentLayout"

// import view
import ContactMe from "../views/Contact/contact"

import SEO from "../components/seo"

const Contact = () => (
  <ContentLayout paddingTop={100}>
    <SEO title="Contact Us Page" />
    <ContactMe />
  </ContentLayout>
)

export default Contact
