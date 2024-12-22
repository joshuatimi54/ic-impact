import React from "react";
import Footer from "@/components/footer/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIc from "@/components/about/AboutIc";
import FindYourPurpose from "@/components/about/FindYourPurpose";
import OurVision from "@/components/about/vision/OurVision";
import Meet from "@/components/about/Meet";
import Team from "@/components/about/members/Team";
import CallToAction from "@/components/about/CallToAction";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ScrollToTop from "@/components/button/ScrollToTop";

const About: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <AboutHero />
        <AboutIc />
        <FindYourPurpose />
        <OurVision />
        <Meet />
        <Team />
        <CallToAction />
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default About;
