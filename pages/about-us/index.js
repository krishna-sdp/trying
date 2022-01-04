import React from "react";
import AboutHeading from "../../components/about/AboutHeading";
import CulturePara from "../../components/about/CulturePara";
import OurValue1 from "../../components/about/OurValue1";
import OurValue2 from "../../components/about/OurValue2";
import OurValuecard from "../../components/about/OurValuecard";
import MyTeam from "../../components/about/MyTeam";
import JoinTeam from "../../components/about/JoinUs";
import MyCarousel from "../../components/about/MyCarousel";
import SuperRole from "../../components/about/SuperRole";
// import LogoQue from "../../components/Home/LogoQue";
export default function About() {
  return (

    <div className="about-page">
      <AboutHeading />
      <MyCarousel />
      <CulturePara bg={"about-para"} />
      <OurValue1 />
      <OurValuecard />
      <section className="my-team">
        <OurValue2 />
        <MyTeam />
        <SuperRole/>
        {/* <LogoQue /> */}
      </section>
    <JoinTeam />
    </div>

  );
}
