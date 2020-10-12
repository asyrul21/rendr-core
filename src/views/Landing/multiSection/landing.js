import React, { Fragment } from "react"
import classnames from "classnames"

// import components
import CustomHero from "src/components/heros/custom/hero"
import SectionTitle from "src/components/sectionTitles/sectionTitle1/sectionTitle"
import Content from "src/containers/Content/Content"
import InfoCards from "src/components/infoCards/infoCards"

// data
import data from "static/data/indexPage/indexPage-data-2.json"
import Image from "src/containers/Image/Image"

// import style
import "./landing.scss"

const Landing = () => {
    const heroProps = {
        ...data.hero,
        link: "#"
    }

    const section1Data = data.section1;
    const section2Data = data.section2;
    return (
        <Fragment>
            <CustomHero {...heroProps} />
            <SectionTitle text={section1Data.heading} className="landing_section_title_whyUs"/>
            <Content className="landing_whyUs">
                <InfoCards data={section1Data.infoCards}/>
            </Content>
            <Content className="landing_programmes">
                <div className={classnames("backgroundImage")}>
                    <Image {...section2Data.background }/>
                </div>
                <SectionTitle text={section2Data.title} className="landing_section_title_programmes"/>
            </Content>
        </Fragment>
    )
}

export default Landing
