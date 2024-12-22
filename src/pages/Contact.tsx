import React from "react";
import Footer from "@/components/footer/Footer";
import Map from "@/components/contact/Map";
import ContactInfo from "@/components/contact/ContactInfo";
import Faq from "@/components/contact/Faq";
import CallToAction from "@/components/about/CallToAction";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ContactHero from "@/components/contact/ContactHero";
import ScrollToTop from "@/components/button/ScrollToTop";

const Contact: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <ContactHero />
        <Map />
        <ContactInfo />
        <Faq />
        <CallToAction />
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Contact;
