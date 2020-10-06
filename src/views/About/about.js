import React from "react"

//import GenericContainer
// import GenericContainer from "../../containers/GenericContainer/GenericContainer"

// components
import Content from "../../containers/Content/Content"
import TextPhotoRow from "./components/TextPhotoRow/TextPhotoRow"
import SectionTitle from "src/components/sectionTitles/sectionTitle1/sectionTitle"
import OrgChartRow from "src/components/orgCharts/OrgChartRow"

// data
import data from "static/data/aboutPage/aboutPage-data"

// import style
import "./about.scss"

const About = () => {
  const textPhotoRowData = data.textPhotoRows
  return (
    <Content>
      <TextPhotoRow
        pictureLast
        heading={textPhotoRowData[0].heading}
        paragraphs={textPhotoRowData[0].paragraphs}
        image={textPhotoRowData[0].image}
      />

      <TextPhotoRow
        pictureFirst
        heading={textPhotoRowData[1].heading}
        paragraphs={textPhotoRowData[1].paragraphs}
        image={textPhotoRowData[1].image}
      />
      <SectionTitle
        text="The Team"
        className="sectionTitle_theTeam"
      ></SectionTitle>

      <div className="aboutPage_orgChartContainer">
        <OrgChartRow data={data.orgChartRows[0]} />
        <OrgChartRow data={data.orgChartRows[1]} />
        <OrgChartRow data={data.orgChartRows[1]} />
      </div>
    </Content>
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
