import React, { Fragment } from "react"

//import GenericContainer
// import GenericContainer from "../../containers/GenericContainer/GenericContainer"

import ContentContainer from "../../containers/ContentContainer/ContentContainer"
import TextPhotoRow from "./components/TextPhotoRow/TextPhotoRow"

// import style
import "./about.scss"

const About = () => {
  return (
    <ContentContainer>
      <TextPhotoRow pictureLast></TextPhotoRow>
      <TextPhotoRow pictureFirst></TextPhotoRow>
      {/* <SectionTitle title="The Team"></SectionTitle> */}
    </ContentContainer>
  )
}

export default About

// <Fragment>
//       <GenericContainer
//         display="flex"
//         width="90%"
//         marginCenter
//         minHeight="400px"
//         justifyContent="space-between"
//       >
//         <GenericContainer width={400}>Texts go here</GenericContainer>
//         <GenericContainer width={400}> Picture Goes here</GenericContainer>
//       </GenericContainer>
//     </Fragment>
