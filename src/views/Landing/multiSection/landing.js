import React, { Fragment } from "react"
import classnames from "classnames"

// import components
import CustomHero from "src/components/heros/custom/hero"
import SectionTitle from "src/components/sectionTitles/sectionTitle1/sectionTitle"
import Content from "src/containers/Content/Content"
import InfoCards from "src/components/infoCards/infoCards"
import PriceCards from "src/components/priceCards/priceCards"
import Button from "src/components/buttons/indexButton/indexButton"

// animators
import AnimateAppear from "src/components/animators/reveal-fade-appear"
import AnimateAppearFromBottom from "src/components/animators/reveal-fade-appear-from-bottom"

// data
import data from "static/data/indexPage/indexPage-data-2.json"
import Image from "src/containers/Image/Image"

// import style
import "./landing.scss"

// import animation
import Fade from "react-reveal/Fade"

const Landing = () => {
    const heroProps = {
        ...data.hero,
        link: "#"
    }

    const section1Data = data.section1;
    const section2Data = data.section2;
    const section3Data = data.section3;
    return (
        <Fragment>
            <CustomHero {...heroProps} />
            <SectionTitle text={section1Data.heading} className="landing_section_title_whyUs"/>
            <Content className="landing_section_whyUs">
                <AnimateAppear>
                    <InfoCards data={section1Data.infoCards}/>
                </AnimateAppear>
            </Content>
            <Content className="landing_programmes">
                <div className={classnames("backgroundImage")}>
                    <Image {...section2Data.background }/>
                </div>
                <SectionTitle text={section2Data.title} className="landing_section_title_programmes"/>

                <AnimateAppearFromBottom>
                    <PriceCards data={section2Data.programmes}/>
                </AnimateAppearFromBottom>
            </Content>
            <Content className="landing_contact">
                <SectionTitle text={section3Data.title} className="landing_section_title_contact"/>
                <AnimateAppear>
                    <p className="landing_contact_text">
                        { section3Data.text }
                    </p>
                    <Button text={ section3Data.buttonText } className="landing_contact_button" fontColor="white"
                    external link={ section3Data.buttonLink }
                    />
                </AnimateAppear>
            </Content>
        </Fragment>
    )
}

export default Landing
