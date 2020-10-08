import React from "react"
import cx from "classnames"

// components
import Content from "../../containers/Content/Content"
import TextBlock from "src/components/textBlock/textBlock"
import SimpleForm from "src/components/forms/simple/form"

// data

// data
import data from "static/data/contactPage/contactPage-data.json"

// import style
import "./contact.scss"

const Contact = () => {
  return (
    <Content className="contact_Content_layout">
      <div className={cx("contact_column", "contact_leftCol")}>
        <TextBlock
          heading={data.text.heading}
          paragraphs={data.text.paragraphs}
        />
        <div className="contact_formContainer">
          <SimpleForm />
        </div>
      </div>
      <div className={cx("contact_column", "contact_rightCol")}>
        This is the form
      </div>
    </Content>
  )
}

export default Contact
